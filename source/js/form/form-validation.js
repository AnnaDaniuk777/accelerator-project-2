export const initFormValidation = () => {
  const form = document.getElementById('question-form');
  const phoneInput = form.querySelector('[name="phone"]');
  const emailInput = form.querySelector('[name="email"]');
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Zа-яА-ЯёЁ]{2,}$/;
  let formSubmitted = false;

  const showError = (input, errorElement, message) => {
    input.classList.add('form__input--error');
    errorElement.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  };

  const hideError = (input, errorElement) => {
    input.classList.remove('form__input--error');
    errorElement.textContent = '';
    input.removeAttribute('aria-invalid');
  };

  const getPhoneErrorElement = () => phoneInput.closest('.form__field').querySelector('.form__error');

  const getEmailErrorElement = () => emailInput.closest('.form__field').querySelector('.form__error');

  const setupPhoneMask = () => {
    phoneInput.addEventListener('input', () => {
      const originalValue = phoneInput.value;
      const digitsOnly = originalValue.replace(/\D/g, '');

      if (digitsOnly.length === 0) {
        phoneInput.value = '';

        return;
      }

      let formattedValue = '';
      const firstDigit = digitsOnly.slice(0, 1);
      let remainingDigits = '';

      if (firstDigit === '8') {
        formattedValue = '8';
        remainingDigits = digitsOnly.slice(1);
      } else if (firstDigit === '7') {
        formattedValue = '+7';
        remainingDigits = digitsOnly.slice(1);
      } else {
        formattedValue = '+7';
        remainingDigits = digitsOnly;
      }

      if (remainingDigits.length > 0) {
        formattedValue += ` (${remainingDigits.slice(0, 3)}`;
      }
      if (remainingDigits.length > 3) {
        formattedValue += `)-${remainingDigits.slice(3, 6)}`;
      }
      if (remainingDigits.length > 6) {
        formattedValue += `-${remainingDigits.slice(6, 8)}`;
      }
      if (remainingDigits.length > 8) {
        formattedValue += `-${remainingDigits.slice(8, 10)}`;
      }

      phoneInput.value = formattedValue;
    });
  };

  const validatePhone = () => {
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    const phoneErrorElement = getPhoneErrorElement();

    hideError(phoneInput, phoneErrorElement);

    if (!phoneDigits.trim()) {
      showError(phoneInput, phoneErrorElement, 'Пожалуйста, введите номер телефона');

      return false;
    }

    if (phoneDigits.length !== 11) {
      showError(phoneInput, phoneErrorElement, 'Номер телефона должен содержать 11 цифр');

      return false;
    }

    const firstDigit = phoneDigits.slice(0, 1);
    if (firstDigit !== '7' && firstDigit !== '8') {
      showError(phoneInput, phoneErrorElement, 'Номер должен начинаться с 7 или 8');

      return false;
    }

    return true;
  };

  const validateEmail = () => {
    const emailValue = emailInput.value.trim();
    const emailErrorElement = getEmailErrorElement();

    hideError(emailInput, emailErrorElement);

    if (!emailValue) {
      showError(emailInput, emailErrorElement, 'Пожалуйста, введите email адрес');

      return false;
    }

    if (!emailPattern.test(emailValue)) {
      showError(emailInput, emailErrorElement, 'Пожалуйста, введите корректный email адрес');

      return false;
    }

    return true;
  };

  const validateForm = () => {
    const isPhoneValid = validatePhone();
    const isEmailValid = validateEmail();

    return isPhoneValid && isEmailValid;
  };

  const setupLiveValidation = () => {
    phoneInput.addEventListener('input', () => {
      if (formSubmitted) {
        validatePhone();
      }
    });

    phoneInput.addEventListener('blur', () => {
      if (formSubmitted) {
        validatePhone();
      }
    });

    emailInput.addEventListener('input', () => {
      if (formSubmitted) {
        validateEmail();
      }
    });

    emailInput.addEventListener('blur', () => {
      if (formSubmitted) {
        validateEmail();
      }
    });
  };

  const resetFormErrors = () => {
    const allInputs = form.querySelectorAll('.form__input');
    const allErrors = form.querySelectorAll('.form__error');

    allInputs.forEach((input) => {
      input.classList.remove('form__input--error');
      input.removeAttribute('aria-invalid');
    });

    allErrors.forEach((error) => {
      error.textContent = '';
    });
  };

  const focusFirstError = () => {
    const firstErrorField = form.querySelector('.form__input--error');

    if (firstErrorField) {
      firstErrorField.focus();
    }
  };

  const updateSubmitButton = (isLoading) => {
    const submitButton = form.querySelector('button[type="submit"]');

    if (isLoading) {
      submitButton.disabled = true;
      submitButton.textContent = 'Отправка...';
    } else {
      submitButton.disabled = false;
      submitButton.textContent = 'Отправить';
    }
  };

  const handleSuccess = () => {
    form.reset();
    formSubmitted = false;
    resetFormErrors();
  };

  const submitForm = () => {
    const formData = new FormData(form);

    updateSubmitButton(true);

    fetch('https://echo.htmlacademy.ru', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        handleSuccess();
      })
      .finally(() => {
        updateSubmitButton(false);
      });
  };

  const setupFormSubmit = () => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      formSubmitted = true;

      if (validateForm()) {
        submitForm();
      } else {
        focusFirstError();
      }
    });
  };

  const setupFormReset = () => {
    form.addEventListener('reset', () => {
      formSubmitted = false;
      resetFormErrors();
    });
  };

  const init = () => {
    setupPhoneMask();
    setupLiveValidation();
    setupFormSubmit();
    setupFormReset();
  };

  init();
};
