import { animate } from './helpers';

const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');

  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');

  const total = document.getElementById('total');

  let totalValue;
  let totalSpeedAnime;

  const countCalc = () => {
    const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
    const calcSquareValue = calcSquare.value;

    let calcCountValue = 1;
    let calcDayValue = 1;

    if (calcCount.value > 1) {
      calcCountValue += +calcCount.value / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      calcDayValue = 2;
    } else if (calcDay.value && calcDay.value < 10) {
      calcDayValue = 1.5;
    }

    if (calcType.value && calcSquare.value) {
      totalValue =
        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
    } else {
      totalValue = 0;
    }

    if (totalValue <= 2500) {
      totalSpeedAnime = 3000;
    } else if (totalValue <= 11000) {
      totalSpeedAnime = 2300;
    } else if (totalValue <= 33000) {
      totalSpeedAnime = 2000;
    } else {
      totalSpeedAnime = 1500;
    }

    if (totalValue > 0) {
      animate({
        duration: totalSpeedAnime,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          total.textContent = Math.abs(Math.round(progress * totalValue));
        },
      });
    } else {
      total.textContent = totalValue;
    }
  };

  calcBlock.addEventListener('change', (e) => {
    if (
      e.target === calcType ||
      e.target === calcSquare ||
      e.target === calcCount ||
      e.target === calcDay
    ) {
      countCalc();
    }
  });
};

export default calc;
