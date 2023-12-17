const modal = () => {
  const modal = document.querySelector('.popup');
  const modalWindow = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = document.querySelector('.popup-close');

  const minWigth = 750;

  let count = 0;
  let wigth = document.documentElement.clientWidth;

  let idInterval;

  const anime = () => {
    count++;
    idInterval = requestAnimationFrame(anime);

    if (count < Math.round(wigth / 50)) {
      modalWindow.style.left = count * 20 + 'px';
    } else {
      cancelAnimationFrame(idInterval);
      count = 0;
    }
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      wigth = document.documentElement.clientWidth;
      modal.style.display = 'block';

      if (wigth > minWigth) {
        anime();
      } else {
      }
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
};

export default modal;
