const regularExpressions = () => {
  const formNames = document.querySelectorAll('.form-name');
  const formPhones = document.querySelectorAll('.form-phone');
  const formEmailes = document.querySelectorAll('.form-email');
  const mess = document.querySelector('.mess');

  const calcItemAll = document.querySelectorAll('input.calc-item');

  calcItemAll.forEach((item) => {
    item.addEventListener('blur', (e) => {
      if (!/[^\d]/g.test(item.value)) {
        e.target.value = item.value;
        console.log('число');
      } else {
        alert('Нужно ввести целое число');
        e.target.value = e.target.value.replace(/[^\d]/g, '');
      }
    });
  });

  formNames.forEach((item) => {
    item.addEventListener('blur', (e) => {
      if (/^[а-яА-Я-\s]{0,}$/g.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(/[\w\D]/g, '');
      }
    });
  });

  mess.addEventListener('blur', (e) => {
    if (/^[а-яА-Я-\s]{0,}$/g.test(mess.value)) {
      e.target.value = mess.value;
    } else {
      e.target.value = e.target.value.replace(/[\w\D]/g, '');
    }
  });

  formEmailes.forEach((item) => {
    item.addEventListener('blur', (e) => {
      if (/^[\w\.\-\_\!\~\*\'\@]$/g.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(
          /[\[\]\&\/\#\,\+\$\%\"\:\?\<\>\{\}а-яА-Я\s]/g,
          ''
        );
        e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
        e.target.value = e.target.value.replace(/^[\-]/g, '');
        e.target.value = e.target.value.replace(/[\-]$/g, '');
      }
    });
  });

  formPhones.forEach((item) => {
    item.addEventListener('blur', (e) => {
      if (/^[\d\(\)\-]$/g.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(
          /[\&\/\#\,\+\$\~\%\.\'\"\:\*\?\<\>\{\}\!\_a-zA-Zа-яА-Я\s]/g,
          ''
        );
        e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
        e.target.value = e.target.value.replace(/^[\-]/g, '');
        e.target.value = e.target.value.replace(/[\-]$/g, '');
      }
    });
  });
};

export default regularExpressions;
