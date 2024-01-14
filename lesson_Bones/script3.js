'use strict';

const selectFilmes = document.getElementById('filmes');
const cardСolumns = document.querySelector('.card-columns');

let heroesArr;
let moviesList = ['All movies'];

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

const filter = () => {
  heroesArr.forEach(function (item) {
    let moviesArr = item.movies;

    for (let key in moviesArr) {
      if (!moviesList.includes(moviesArr[key])) {
        moviesList.push(moviesArr[key]);
      }
    }
  });
  moviesList.sort();
  for (let film of moviesList) {
    let option = new Option(`${film}`, `${moviesList.value}`);
    selectFilmes.append(option);
  }
  setTimeout(() => (selectFilmes.style.display = 'inline-block'), 380);
};

const outputCard = () => {
  cardСolumns.style.display = 'none';
  let n = 0;

  heroesArr.forEach(function (item) {
    n++;
    let data = [item];
    let template = [
      { '<>': 'h5', class: 'card-title style-title', text: '${name}' },
      { '<>': 'h5', class: 'card-title style-title', text: '${realName}' },
      { '<>': 'img', class: 'card-img-top', src: '${photo}', alt: '${name}' },
      { '<>': 'h5', class: 'card-title style-title', text: '${actors}' },
      {
        '<>': 'div',
        class: 'card-body',
        html: [
          {
            '<>': 'h5',
            class: 'card-title',
            text: 'Characteristics of the hero',
          },
          {
            '<>': 'p',
            class: 'card-text',
            text: 'Biological species: ${species}',
          },
          { '<>': 'p', class: 'card-text', text: 'Gender: ${gender}' },
          {
            '<>': 'p',
            class: 'card-text',
            text: 'Citizenship: ${citizenship}',
          },
          { '<>': 'p', class: 'card-text', text: 'Status: ${status}' },
          { '<>': 'p', class: 'card-text', text: 'Birthday: ${birthDay}' },
          {
            '<>': 'p',
            class: 'card-text',
            text: 'The day of death: ${deathDay}',
          },
          { '<>': 'p', class: 'card-text', text: 'Movies: ${movies}' },
        ],
      },
    ];

    let divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.id = `'card-${n}'`;
    divCard.innerHTML = `${json2html.render(data, template)}`;
    cardСolumns.append(divCard);
  });
  setTimeout(() => (cardСolumns.style.display = 'inline-block'), 500);
};

const filterChange = () => {
  let filterName = selectFilmes.options[selectFilmes.selectedIndex].textContent;
  let n = 0;

  let cardDisplay;
  let cardId;

  heroesArr.forEach(function (item) {
    n++;
    cardId = `'card-${n}'`;
    cardDisplay = document.getElementById(cardId);

    let moviesArr = item.movies;
    cardDisplay.style.display = 'none';

    if ((moviesArr === undefined) & (filterName === 'All movies')) {
      cardDisplay.style.display = 'inline-block';
    } else {
    }

    for (let key in moviesArr) {
      console.log(moviesArr);
      if (filterName === 'All movies') {
        cardDisplay.style.display = 'inline-block';
      } else if (moviesArr[key] === filterName) {
        cardDisplay.style.display = 'inline-block';
        break;
      } else {
      }
    }
  });
};

getData('dbHeroes.json')
  .then((data) => {
    heroesArr = data;
    console.log('Данные получены: ', heroesArr);
    filter();
    outputCard();
  })
  .catch((error) => {
    console.log(`Ошибка получения: ${error}`);
  });

selectFilmes.addEventListener('change', () => filterChange());
