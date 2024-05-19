export function createRichText() {
    const div = document.createElement('div');
    div.innerHTML = `
      <h2>Rich Text Content</h2>
      <p>This is some rich text content from <strong>app1</strong>.</p>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
      <p>This is a <strong>rich text</strong> component with <em>formatting</em> and <a href="#">a link</a>.</p>
    `;
    return div;
  }
  