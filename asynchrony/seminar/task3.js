"use strict";

// Задание 3 (тайминг 35 минут)
// Напишите функцию getData, которая делает асинхронный запрос к
// API и возвращает данные в виде объекта.
// Внутри функции происходит асинхронный запрос к API с помощью
// функции fetch. Затем, с использованием оператора await, ожидается
// ответ от сервера и его парсинг в формате JSON с помощью метода
// response.json(). Полученные данные возвращаются из функции.
// Задание 3 Дополнение
// В случае возникновения ошибки при выполнении асинхронных
// операций, используется конструкция try/catch для обработки и
// отображения ошибки.
// В функции main вызывается функция getData с использованием
// await, чтобы получить данные асинхронно. Полученные данные
// выводятся в консоль. Если происходит ошибка, она ловится и
// выводится сообщение об ошибке. Функция main также объявлена как
// асинхронная с использованием ключевого слова async. В конце
// вызывается функция main для запуска процесса получения данных.

// async function getData(url) {
//   try {
//     const response = await fetch(url);
//     if (response.ok) {
//       console.log(await response.json());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
async function main() {
  async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(`Error status ${response.status}`);
    }
  }

  console.log(await getData("https://jsonplaceholder.typicode.com/users"));
}

main();
