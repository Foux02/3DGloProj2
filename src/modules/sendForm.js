const sendForm = ({ fornId }) => {
  const form = document.getElementById(fornId);
  const statusBlock = document.createElement('div');
  const nameUserEmail = document.getElementsByName('user_email');

  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется.';
  const validText =
    'Данные не валидны! Приведите данные в соответствие с примерами. ФИО: Сергей Филатов. Номер телефона: +7(900)500-60-60';

  nameUserEmail.forEach((key) => {
    key.setAttribute('required', true);
  });

  const validate = (list) => {
    let validateName;
    let validatePhone;
    let validateMessage;

    let success = true;

    list.forEach((key) => {
      if (key.name === 'user_name') {
        validateName = /^[а-яА-Я\s]+$/g.test(key.value);
      } else if (key.name === 'user_phone') {
        validatePhone = /^\+\d{1}\(\d{3}\)(\d{3})[-](\d{2})[-]\d{2}$/.test(
          key.value
        );
      } else if (key.name === 'user_message') {
        validateMessage = /^[а-яА-Я0-9\s\.\,\?\!\:\;\"\-\(\)]+$/.test(
          key.value
        );
      } else {
      }
    });

    if (
      validateName === false ||
      validatePhone === false ||
      validateMessage === false
    ) {
      success = false;
    }

    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    const cleanTextContent = () => {
      statusBlock.textContent = '';
    };

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          statusBlock.style.color = '#00CC33';

          setTimeout(cleanTextContent, 4000);

          formElements.forEach((input) => {
            input.value = '';
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          statusBlock.style.color = '#FF5555';
        });
    } else {
      statusBlock.textContent = validText;
      statusBlock.style.color = '#FFA07A';
    }
  };

  try {
    if (!form) {
      throw new Error('Верните форму, пожалуйста))');
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
