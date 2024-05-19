import { createRichText } from './RichText';

document.addEventListener('DOMContentLoaded', () => {
  const richText = createRichText();
  document.body.appendChild(richText);
});
