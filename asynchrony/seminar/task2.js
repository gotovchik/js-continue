"use strict";

// Задание 2
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип
// запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().

//API: https://jsonplaceholder.typicode.com/users

// function loadData(url) {
//   const xhr = new XMLHttpRequest();

//   xhr.open("GET", url, true);
//   xhr.onload = function () {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
//       console.log(this.responseText);
//     }
//   };
//   xhr.send();
// }

function loadData(url) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Ошибка");
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

loadData("https://jsonplaceholder.typicode.com/users");
