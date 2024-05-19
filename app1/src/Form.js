export function createForm() {
    const form = document.createElement('form');
    
    const label = document.createElement('label');
    label.innerText = 'Name:';
    form.appendChild(label);
    
    const input = document.createElement('input');
    input.type = 'text';
    input.name = 'name';
    form.appendChild(input);
    
    const errorMessage = document.createElement('div');
    errorMessage.style.color = 'red';
    form.appendChild(errorMessage);
    
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    form.appendChild(submitButton);
    
    form.onsubmit = (event) => {
      event.preventDefault();
      errorMessage.innerText = '';
  
      const nameValue = input.value.trim();
      
      if (!nameValue) {
        errorMessage.innerText = 'Name is required.';
        return;
      }
  
      if (!/^[A-Za-z]+$/.test(nameValue)) {
        errorMessage.innerText = 'Name must contain only alphabetic characters.';
        return;
      }
  
      alert(`Form submitted with name: ${nameValue}`);
    };
    
    return form;
  }
  