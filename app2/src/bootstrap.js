import './custom-element';

document.addEventListener('DOMContentLoaded', () => {
  const customElement = document.createElement('remote-rich-text');
  customElement.setAttribute('remote-url', 'http://localhost:3000/remoteEntry.js');
  customElement.setAttribute('scope', 'app1');
  customElement.setAttribute('module', './RichText');
  document.body.appendChild(customElement);
});
