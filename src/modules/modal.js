import { animate } from './helpers';

const modal = () => {
  const modal = document.querySelector('.popup');
  const modalWindow = document.querySelector('.popup-content');
  const buttons = document.querySelectorAll('.popup-btn');

  const minWigth = 750;

  let wigth = document.documentElement.clientWidth;

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      wigth = document.documentElement.clientWidth;
      modal.style.display = 'block';

      if (wigth > minWigth) {
        animate({
          duration: 800,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modalWindow.style.left = progress * 40 + '%';
            modal.style.opacity = progress;
          },
        });
      } else {
      }
    });
  });

  modal.addEventListener('click', (e) => {
    if (
      !e.target.closest('.popup-content') ||
      e.target.closest('.popup-close')
    ) {
      modal.style.display = 'none';
    }
  });
};

export default modal;
