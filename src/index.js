const state = {
  form: {
    isDisabled: false
  }
};

// let form = document.querySelector('form');
let formButton = document.querySelector('button');

formButton.addEventListener('click', function(e) {
  e.preventDefault();

  let [currentForm] = document.forms;

  Array.from(currentForm.elements).forEach(element => {
    if (element.tagName.toLowerCase() === 'input') {
      element.disabled = !element.disabled;
    }

    state.form.isDisabled = !state.form.isDisabled;
  });

  if (state.form.isDisabled) {
    e.currentTarget.innerText = 'Edit';
  }

  if (!state.form.isDisabled) {
    e.currentTarget.innerText = 'Save';
  }
});
