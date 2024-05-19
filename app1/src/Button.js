export function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Click me!';
  button.onclick = () => alert('Button clicked!');
  return button;
}

export function createDiv() {
  var elemDiv = document.createElement('div');
  elemDiv.style.cssText = 'border: 2px solid green;';
  elemDiv.textContent = 'THis is text from div';
  return elemDiv;
}

