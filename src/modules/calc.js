const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block');

  const calcType = document.querySelector('.calc-type');
  const calcSquare = document.querySelector('.calc-square');
  const calcCount = document.querySelector('.calc-count');
  const calcDay = document.querySelector('.calc-day');

  const total = document.getElementById('total');

  let totalCount = 0;
  let totalValue;

  const totalAnime = () => {
    if (totalValue <= 2500) {
      totalCount += 9;
    } else if (totalValue <= 11000) {
      totalCount += 29;
    } else if (totalValue <= 33000) {
      totalCount += 92;
    } else {
      totalCount += 192;
    }

    let idInterval = requestAnimationFrame(totalAnime);

    if (totalValue <= totalCount) {
      total.textContent = totalValue;
      cancelAnimationFrame(idInterval);
      totalCount = 0;
    } else {
      total.textContent = 0 + totalCount;
    }
  };

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

    if (totalValue > 0) {
      totalAnime();
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
