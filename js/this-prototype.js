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

const makeChangeColor = function () {
   const changeColor = function (color) {
      console.log('changeColor -> this', this);
      this.color = color;
   };

   changeColor(); // Какой ??? this
    
   const sweater = {
      color: 'teal',
   };

   sweater.updateColor = changeColor;

   sweater.updateColor('red');  //Какой??? this
};

const swapColor = makeChangeColor();

 swapColor('blue'); //Какой??? this

// ?Задача - 4

// ?Задача - 5
// *!________________________________________________________________*