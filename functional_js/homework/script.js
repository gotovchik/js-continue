"use strict";

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
// найти минимальное число в массиве, решение задание должно состоять из одной
// строки кода.

// const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement. Метод increment должен увеличивать
// значение счетчика на 1, а метод decrement должен уменьшать значение счетчика
// на 1. Значение счетчика должно быть доступно только через методы объекта,
// а не напрямую.

// function createCounter() {
//   let count = 0;

//   function counter() {
//     return count;
//   }

//   counter.increment = () => {
//     count++;
//   };

//   counter.decrement = () => {
//     count--;
//   };

//   return counter;
// }

// const counter = createCounter();
// console.log(counter());
// counter.increment();
// counter.increment();
// console.log(counter());
// counter.decrement();
// console.log(counter());

// 3) Дополнительное задание, выполняем только если проходили работу с DOM.
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.

function findElementByClass(targetElem, targetClass) {
  if (targetElem.classList.contains(targetClass)) {
    return targetElem;
  }
  const childArr = targetElem.children;
  let elem;
  for (const childElem of childArr) {
    if (elem?.classList.contains(targetClass)) {
      return elem;
    }
    if (childArr.length === 0) {
      continue;
    }
    if (childElem.classList.contains(targetClass)) {
      elem = childElem;
      break;
    } else {
      elem = findElementByClass(childElem, targetClass);
    }
  }
  return elem;
}

const sectionEl = document.querySelector("section");
console.log(findElementByClass(sectionEl, "test"));
