"use strict";

// Задание 3. Изменение стиля элемента через заданное время (выполняем, если знакомы с DOM).

// Напишите функцию changeStyleDelayed, которая принимает id элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль (любой, например - цвет текста) элемента через указанное время.

// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"

function changeStyle(elem) {
  elem.classList.toggle("light-theme");
  elem.classList.toggle("dark-theme");
}

function changeStyleDelayed(id, delay) {
  const elem = document.getElementById(id);
  setTimeout(function () {
    changeStyle(elem);
  }, delay);
}

changeStyleDelayed("myElem", 1000);
changeStyleDelayed("myElem", 2000);
changeStyleDelayed("myElem", 3000);
