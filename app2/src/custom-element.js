const loadRemoteModule = (url, scope, module) => {
    return new Promise((resolve, reject) => {
      const element = document.createElement('script');
      element.src = url;
      element.type = 'text/javascript';
      element.async = true;
  
      element.onload = () => {
        const container = window[scope];
        container.init({
          shared: {}
        });
        container.get(module).then(factory => {
          const Module = factory();
          resolve(Module);
        }).catch(reject);
      };
  
      element.onerror = reject;
  
      document.head.appendChild(element);
    });
  };
  
  class RemoteRichText extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    async render() {
      const remoteUrl = this.getAttribute('remote-url');
      const scope = this.getAttribute('scope');
      const module = this.getAttribute('module');
  
      if (!remoteUrl || !scope || !module) {
        this.innerText = 'Missing attributes for remote module loading.';
        return;
      }
  
      try {
        const { createRichText } = await loadRemoteModule(remoteUrl, scope, module);
        const richText = createRichText();
        this.appendChild(richText);
      } catch (error) {
        console.error('Error loading remote module:', error);
        this.innerText = 'Failed to load rich text.';
      }
    }
  }
  
  customElements.define('remote-rich-text', RemoteRichText);
  