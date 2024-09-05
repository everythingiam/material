// validation.js
function setupFormValidation() {
  const loginForm = document.querySelector('input[name="name"]');
  const registerForm = document.querySelector('input[name="name"]');
  const forgotForm = document.querySelector('input[name="name"]');

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Предотвращаем отправку формы для кастомной валидации
      if (!validateForm(loginForm)) {
        showCustomErrors(loginForm);
      } else {
        loginForm.submit(); // Если форма валидна, отправляем её
      }
    });
  }

  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(registerForm)) {
        showCustomErrors(registerForm);
      } else {
        registerForm.submit();
      }
    });

    // Дополнительная проверка совпадения паролей
    const passwordInputs = registerForm.querySelectorAll('input[type="password"]');
    passwordInputs[1].addEventListener('input', () => {
      if (passwordInputs[0].value !== passwordInputs[1].value) {
        passwordInputs[1].setCustomValidity('Пароли не совпадают');
      } else {
        passwordInputs[1].setCustomValidity('');
      }
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(forgotForm)) {
        showCustomErrors(forgotForm);
      } else {
        forgotForm.submit();
      }
    });
  }
}

// Валидация формы через Constraint Validation API
function validateForm(form) {
  return form.checkValidity();
}

// Показать кастомные ошибки в span
function showCustomErrors(form) {
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    const errorSpan = input.parentElement.querySelector('.error-message');
    if (!input.validity.valid) {
      showError(input, errorSpan);
    } else {
      clearError(errorSpan);
    }
  });
}

// Показать сообщение об ошибке
function showError(input, errorSpan) {
  let message = '';

  if (input.validity.valueMissing) {
    message = 'Поле обязательно для заполнения';
  } else if (input.validity.typeMismatch) {
    message = 'Введите корректное значение';
  } else if (input.validity.tooShort) {
    message = `Минимальная длина ${input.minLength} символов. Введено ${input.value.length}`;
  }

  if (!errorSpan) {
    errorSpan = document.createElement('span');
    errorSpan.classList.add('error-message');
    input.parentElement.appendChild(errorSpan);
  }

  errorSpan.textContent = message;
}

// Очистить сообщение об ошибке
function clearError(errorSpan) {
  if (errorSpan) {
    errorSpan.textContent = '';
  }
}

// Запуск валидации при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  setupFormValidation();
});
