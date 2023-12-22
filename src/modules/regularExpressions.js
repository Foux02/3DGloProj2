const regularExpressions = () => {
  const formNames = document.querySelectorAll('.form-name');
  const formPhones = document.querySelectorAll('.form-phone');
  const formEmailes = document.querySelectorAll('.form-email');
  const mess = document.querySelector('.mess');

  const calcItemAll = document.querySelectorAll('input.calc-item');

  calcItemAll.forEach((item) => {
    item.addEventListener('input', (e) => {
      if (!/[^\d]/g.test(item.value)) {
        e.target.value = item.value;
        console.log('число');
      } else {
        alert('Нужно ввести целое число');
        e.target.value = e.target.value.replace(/[^\d]/, '');
      }
    });
  });

  formNames.forEach((item) => {
    item.addEventListener('input', (e) => {
      if (/^[а-яА-Я-\s]{0,}$/gi.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(/[\w\D]$/, '');
      }
    });
  });

  mess.addEventListener('input', (e) => {
    if (/^[а-яА-Я-\s]{0,}$/gi.test(mess.value)) {
      e.target.value = mess.value;
    } else {
      e.target.value = e.target.value.replace(/[\w\D]$/, '');
    }
  });

  formEmailes.forEach((item) => {
    item.addEventListener('input', (e) => {
      if (/^[\w\.\-\_\!\~\*\'\@]{0,}$/g.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(/[\Wа-яА-Я\s]{1}$/, '');
      }
    });
  });

  formPhones.forEach((item) => {
    item.addEventListener('input', (e) => {
      if (/^[\d\(\)\-]{0,}$/g.test(item.value)) {
        e.target.value = item.value;
      } else {
        e.target.value = e.target.value.replace(/[\Dа-яА-Я\s]{1}$/, '');
      }
    });
  });
};

export default regularExpressions;
