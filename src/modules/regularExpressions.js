const regularExpressions = () => {
  const formNames = document.querySelectorAll('.form-name');
  const formNamesCss = document.getElementsByClassName('form-name');
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
        e.target.value = e.target.value.replace(/[^\d]/g, '');
      }
    });
  });

  formNames.forEach((item, index) => {
    item.addEventListener('blur', (e) => {
      formNamesCss[index].style.textTransform = 'capitalize';
      e.target.value = e.target.value.replace(
        /[a-zA-Z0-9\&\@\/\#\,\+\$\~\%\.\'\"\:\;\*\?\<\>\{\}\!\_\(\)]/g,
        ''
      );
      e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
      e.target.value = e.target.value.replace(/[\s]{2,}/g, ' ');
      e.target.value = e.target.value.replace(/^[\-\s]*/g, '');
      e.target.value = e.target.value.replace(/[\-\s]*$/g, '');

      console.log('else' + index);
    });
  });

  mess.addEventListener('blur', (e) => {
    mess.style.textTransform = 'capitalize';
    e.target.value = e.target.value.replace(
      /[a-zA-Z0-9\&\/\#\,\+\$\~\%\.\'\"\:\;\*\?\<\>\{\}\!\_\(\)]/g,
      ''
    );
    e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
    e.target.value = e.target.value.replace(/[\s]{2,}/g, ' ');
    e.target.value = e.target.value.replace(/^[\-\s]*/g, '');
    e.target.value = e.target.value.replace(/[\-\s]*$/g, '');
    mess.style.textTransform = 'capitalize';
  });

  formEmailes.forEach((item) => {
    item.addEventListener('blur', (e) => {
      e.target.value = e.target.value.replace(
        /[\[\]\&\/\#\,\+\$\%\"\:\?\<\>\{\}а-яА-Я\s]/g,
        ''
      );
      e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
      e.target.value = e.target.value.replace(/^[\-]*/g, '');
      e.target.value = e.target.value.replace(/[\-]*$/g, '');
    });
  });

  formPhones.forEach((item) => {
    item.addEventListener('blur', (e) => {
      e.target.value = e.target.value.replace(
        /[\&\/\#\,\+\$\~\%\.\'\"\:\*\?\<\>\{\}\!\_a-zA-Zа-яА-Я\s]/g,
        ''
      );
      e.target.value = e.target.value.replace(/[\-]{2,}/g, '-');
      e.target.value = e.target.value.replace(/^[\-]*/g, '');
      e.target.value = e.target.value.replace(/[\-]*$/g, '');
    });
  });
};

export default regularExpressions;
