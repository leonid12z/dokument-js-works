// !Функция это чистий случай обьекта -> СЫЛОЧННЫЙ ТИП

// console.log('[] === []: ', [] === []); //Не равны
// console.log("{} === {}: ", {} === {}); //Не равны

// console.log(
//    'function() {} === function() {}: ',
//    function () { } === function () { },
// );

// const fnA = function () {
//    console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);
// *!________________________________________________________________*
// !ПРАВИЛА
// ? Контекст(this)
// ?Где и как было обьявленна функция НЕ иметт не какого влияния на контекст
// ?Контекст определяеться В момент вызова функции, если он не привязан явно
// *!________________________________________________________________*
// ?Как метод обьекта. В контексте обьекта

// const user = {
//    tag: 'Leo',
//    showTag() {
//       console.log('showTag -> this', this); // Это метод обьекта
//    },
// };

// user.showTag();
// *!________________________________________________________________*
// ?Вызов без контекста
// В строгам режиме = undefined
// Не в строгом режиме = window

// const foo = function () {
//    console.log('foo -> this', this);
// };

// foo();
// *!________________________________________________________________*
// ?Как метод обьекта но обьявлена как внешняя функция
// В контексте обьекта

// const showTag = function () {
//    console.log("showTag -> this", this);
//    console.log("showTag -> this.tag", this.tag);
// };

// showTag();

// const user = {
//    tag: 'Leo',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

// *!________________________________________________________________*
// ?Вызов без контекста, но обьявлен как метод обьекта

// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// showTag();

//  const outerShowTag = user.showTag; // Это запись ссылки на орегинальную функцию

// outerShowTag();
// *!________________________________________________________________*
// ?Контекст в callback-функциях

// const user = {
//    tag: 'Leo',
//    showTag() {
//       console.log('showTag -> this', this); // Это метод обьекта
//       console.log("showTag -> this.tag", this.tag);
//    },
// };

// const invokeAction = function (action) {
//    console.log(action);

//    action();
// };

// invokeAction(user.showTag);
// *!________________________________________________________________*

// ?Задача - 1

// const fn = function () {
//    console.log('fn -> this', this);
// };

//  fn(); //что будет? undefined
// *!________________________________________________________________*
// ?Задача - 2

// const book = {
//    title: 'React for beginners',
//    showThis() {
//       console.log('showThis -> this', this);
//    },
//    showTitle() {
//       console.log('showTitle -> this.title', this.title);
//    },
// };

// book.showThis(); Какой???this Обьект вызвал эту функцию значит обьект будет сылаться на эту функцию

// const outerShowThis = book.showThis;
// outerShowThis(); Какой???this undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); Какой???this Cannot not undefined
// *!________________________________________________________________*
// ?Задача - 3

// const makeChangeColor = function () {
//    const changeColor = function (color) {
//       console.log('changeColor -> this', this);
//       this.color = color;
//    };

//    changeColor(); // Какой ??? this undefined
    
//    const sweater = {
//       color: 'teal',
//    };

//    sweater.updateColor = changeColor;

//    sweater.updateColor('red');  //Какой??? this

//    return sweater.updateColor
// };

// const swapColor = makeChangeColor();

//  swapColor('blue'); //Какой??? this
// *!________________________________________________________________*
// ?Задача - 4

// const makeChangeColor = function () {
//    const changeColor = function (color) {
//       console.log('changeColor -> this', this);
//       this.color = color;
//    };

//    return changeColor;
// };

// const updateColor = makeChangeColor();
//  updateColor('yellow'); //Какой this ???
   
// const hat = {
//    color: 'blue',
//    updateColor,
// };

// hat.updateColor('orange'); //Какой this???
 // *!________________________________________________________________*
// ?Задача - 5

// const counter = {
//    value: 0,
//    increment(value) {
//       console.log('increment -> this', this);
//       this.value += value;
//    },
//    decrement(value) {
//       console.log('decrement -> this', this);
//       this.value -= value;
//    },
// };

// const updateCounter = function (value, operation) {
//    operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// *!________________________________________________________________*
// !call - apply

// const showThis = function () {
//    console.log('showThis -> this', this);
// };

// showThis();

// const fnA = {
//    a: 5,
//    b: 10,
// };

// showThis.call(fnA, 15, 25); Вызывает какуето функцию, и преднудительно одну вызывает
// showThis.apply(fnA, [1, 5, 5]); Предаеться как массив
// *!________________________________________________________________*
// !call - apply

// const changeColor = function (color) {
//    console.log('change -> this', this);
//    this.color = color;
// };

// const hat = {
//    color: 'black',
// };

// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//    color: 'green',
// };

// changeColor.call(sweater, 'blue');
// console.log(sweater);

// *!________________________________________________________________*
// !bind

// const changeColor = function (color) {
//   console.log("change -> this", this);
//   this.color = color;
// };

// const hat = {
//   color: "black",
// };

// const sweater = {
//   color: "green",
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeHatColor();
// changeSweaterColor();
// *!________________________________________________________________*
// ?Что бы работал код при вызове

// const counter = {
//    value: 0,
//    increment(value) {
//       console.log('increment -> this', this);
//       this.value += value;
//    },
//    decrement(value) {
//       console.log('decrement -> this', this);
//       this.value -= value;
//    },
// };

// const updateCounter = function (value, operation) {
//    operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// *!________________________________________________________________*
// ?counter - задачка увеличение и уменьшение цифрового контента

// const counter = {
//    value: 0,
//    increment() {
//       console.log('increment -> this', this);
//       this.value += 1;
//    },
//    decrement() {
//       console.log('decrement -> this', this);
//       this.value -= 1
//    },
// };

// const decrementBtn = document.querySelector(".js-decrement");
// const incrementBtn = document.querySelector(".js-increment");
// const valueEl = document.querySelector(".js-value");

// decrementBtn.addEventListener('click', function () {
//    console.log('Кликнули на декремент');

//    counter.decrement();
//    console.log(counter);
//    valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//    console.log('Кликнули на инкремент');

//    counter.increment();
//    console.log(counter);
//    valueEl.textContent = counter.value;
// });
// *!________________________________________________________________*
