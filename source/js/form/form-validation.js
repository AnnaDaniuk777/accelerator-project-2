export const validateForm = () => {
  const form = document.querySelector('.form__details');

  if (form) {
    form.addEventListener('submit', (evt) => {
      if (!form.classList.contains('submitted')) {
        form.classList.add('submitted');
      }

      if (!form.checkValidity()) {
        evt.preventDefault();
      }
    });
  }
};
