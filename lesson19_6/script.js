'use strict';

const textInput = document.createElement('p');

const week = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const dateNewYear = new Date(2024, 0, 1);

let nowDate;
let dayText;
let timeOfDay;

const updateSite = () => {
  nowDate = new Date();

  let leftNewYear = Math.floor((dateNewYear - nowDate) / 1000 / 60 / 60 / 24);

  if (nowDate.getHours() > 3 && nowDate.getHours() < 12) {
    timeOfDay = 'Доброе утро';
  } else if (nowDate.getHours() > 11 && nowDate.getHours() < 16) {
    timeOfDay = 'Добрый день';
  } else if (nowDate.getHours() > 15 && nowDate.getHours() < 22) {
    timeOfDay = 'Добрый вечер';
  } else {
    timeOfDay = 'Доброй ночи';
  }

  if (leftNewYear === 1 || leftNewYear % 10 === 1) {
    dayText = 'день';
  } else if (
    (leftNewYear % 100 > 4 && leftNewYear % 100 < 20) ||
    leftNewYear % 10 === 0
  ) {
    dayText = 'дней';
  } else if (leftNewYear < 0) {
    dayText = 'дней';
    leftNewYear = 0;
  } else {
    dayText = 'дня';
  }

  textInput.innerHTML = `${timeOfDay}<br>Сегодня: ${
    week[nowDate.getDay()]
  } <br>Текущее время: ${new Intl.DateTimeFormat('ru', {
    timeStyle: 'medium',
    hour12: true,
  }).format(nowDate)}<br>До нового года осталось ${leftNewYear} ${dayText}`;

  document.body.append(textInput);
};

const timerId = setInterval(updateSite, 1000);
