"use strict";

// Задание 1 (тайминг 20 минут)
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

function getPrototypeChain(obj) {
  const result = [];
  result.push(obj);
  let proto = Object.getPrototypeOf(obj);
  while (!(proto === null)) {
    result.push(proto);
    proto = Object.getPrototypeOf(proto);
  }
  return result;
}

const VacuumCleaner = {
  model: "vacuum cleaner",
  counterOfStarts: 0,
  isFull: false,
  isObstacle: false,

  startCleaning: function () {
    this.counterOfStarts++;
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log(`I a, cleaning... I have been starts:
                  ${this.counterOfStarts} times`);
  },

  goCharge: function () {
    // Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
    console.log("I am the method of VacuumCleaner");
    console.log("I am going to charge...");
  },
};

// новая модель пылесоса
const DancingSeries = {
  // новый свойства и переопредление старых
  model: "dancing series",
  power: 200,
  batterySize: 2100,
  boxSizing: 0.5,
  workTime: 45,
  isUVLampOn: false,
  // добавим новый метод
  switchUVLamp: function () {
    console.log("I am the method of DancingSeries");
    this.isUVLampOn = !this.isUVLampOn;
    console.log(`UV Lamp is ${this.isUVLampOn ? "working" : "not working"}`);
  },

  // наследуем прототип родителя.
  __proto__: VacuumCleaner,
};

const prototypes = getPrototypeChain(DancingSeries);
console.log(prototypes);
