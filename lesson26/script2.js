'use strict';

const sendData = (url, data) => {
  return (
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      /*
  .then((response) => response.json());
  */

      .then((response) => {
        if (!response.ok) {
          throw new Error('Неудачный запрос');
        }
        response.json();
      })
  );
};

const getData = (url) => {
  return fetch(url).then((response) => response.json());
};

try {
  getData('db.json')
    .then((data) => {
      console.log('Данные получены: ', data);
      console.log(`Данные получены (вариант 2): ${data}`);
      sendData(
        'https://jsonplaceholder.typicode.com/posts',
        JSON.stringify(data)
      )
        .then((data) => {
          console.log('Данные отправлены: ', data);
        })
        .catch((error) => {
          console.log(`Ошибка отправки: ${error.message}`);
        });
    })
    .catch((error) => {
      console.log(`Ошибка получения: ${error}`);
    });
} catch (error) {
  console.log(`Ошибка отправки: ${error.message}`);
}
