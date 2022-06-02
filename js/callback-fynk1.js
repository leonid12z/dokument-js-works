// !Callback - ФУНКЦИЯ

// Функция обратного вызова(callback)
// функция может принимать другие фунцкии как параметры
// функция которая передает другой функции как аргумент называеться
// функция обратного(отложения) вызов(Callback - функции)
// функция которая принимает другие функции как параметр или возращает
// функцию как результат совоей работы называеться(функцией высшего пордяка)

// const fnA = function (message, callback) {
//    console.log(message);

//    console.log(callback);
//    callback(250);
// };

// const fnB = function (number) {
//    console.log('Это лог при вызове fnB', number);
// };

// fnA('Hello', fnB);

// ! *__________________________________________________________________*

// ?Сделай матиматику функция doMath(a, b, callback)

// const doMath = function (a, b, callback) {
//    const result = callback(a, b);

//    console.log(result);
// };

// const add = function (x, y) {
//    return x + y;
// };

// const sub = function (x, y) {
//   return x - y;
// };

// doMath(2, 3, add);
// doMath(55, 25, sub);

// !Инлайн функция

// doMath(2, 3, function (x, y) {
//    return x + y;
// });
// doMath(55, 25, function (x, y) {
//   return x - y;
// });

// ! *__________________________________________________________________*

// ?Отложенные вызовы (регистрация событий)

// const buttonRef = document.querySelector('.js-button');

// const handleBtnClick = function () {
//    console.log('Клик по кнопке ' + Date.now());
// };

// buttonRef.addEventListener('click', handleBtnClick);

// ! *__________________________________________________________________*
// Если при каком-то событии вызови эту функцию

// function addEventListener(eventType, callback) {
//    if (eventType == event) {
//       callback()
//    }
// }
// ! *__________________________________________________________________*

// ?Отложения вызова (геолокации)

// const onGetPositionSuccess = function (position) {
//    console.log(position);
// };

// const onGetPositionError = function (error) {
//    console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//    onGetPositionSuccess,
//    onGetPositionError,
// );
// ! *__________________________________________________________________*

// ?Отложенне вызовы (интервалы)

// const callback = function () {
//    console.log('Через 2 секунды внутри колбека в таймауте');
// };

// console.log('В коде перед таймаутом');

// console.log(callback, 2000);

// console.log('В коде после таймаута');
// ! *__________________________________________________________________*

// ?Отложенный вызов: http - запрос
// API UPL: https://pokeapi.co/api/v2/pokemon

// const onRequestSuccess = function (response) {
//    console.log("Вызов функции onRequestSuccess после успешного ответа бекенда");
//    console.log(response);
// };

// fetch("https://pokeapi.co/api/v2/pokemon")
//    .then(res => res.json())
//    .then(onRequestSuccess);
// ! *__________________________________________________________________*

// ?Функция
// 1. Нужно передать функцию
// 2. Функция получает элемент массива
// 3. Если элемент массива удовлетворяет условие то Функция вернет true
// 4. Если элемент массива НЕ удовлетворяет условие то Функция вернет false

// const filter = function (array, test) {
//    const filteredArray = [];

//    for (const el of array) {
//       console.log(el);
//       const passed = test(el);

//       if (passed) {
//          filteredArray.push(el);
//       }
//    }
//    return filteredArray;
// };

// const callback1 = function (value) {
//    return value >= 3;
// }

// const r1 = filter([1, 2, 3, 4, 5], callback1)
// console.log(r1);

// // Инлайн версия
// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8, 9], function (value) {
//    return value <= 4;
// });
// console.log(r2);
// ! *__________________________________________________________________*

// ?Перебор масива фруктов

// const fruits = [
//   { name: "apples", quantity: 300, isFresh: true },
//   { name: "grapes", quantity: 100, isFresh: false },
//   { name: "bananas", quantity: 150, isFresh: true },
//   { name: "laym", quantity: 500, isFresh: false },
// ];

// const filter = function (array, test) {
//    // Создания пустого масива
//    const filteredArray = [];

//    // Перебор орегинального масива
//    for (const el of array) {
//       console.log(el);
//       // Для кождого элемента вызов теста
//       const passed = test(el);
//    //   Пушь по условию
//       if (passed) {
//          filteredArray.push(el);
//       }
//    }
//    // Возврат пустого масива
//    return filteredArray;
// };

// const getFruitsWithQuantity = function (fruit) {
//    return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3);
// ! *__________________________________________________________________*
