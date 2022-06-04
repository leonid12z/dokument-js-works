// !ЗАМЫКАНИЕ

// ?Функция результат своей работы может возращать другую функцию
// Возращаемая функция во время вызова будет иметь доступ
// ко всем локольным меременным(области видомости)
// родительской функции(той из которой ее вернули)
// это называют Замыкание

// const fnA = function (parameter) {
//    const innerVarible = "Значение внутри переменной функции fnA";


//    const innerFunction = function () {
//       console.log(parameter);
//       console.log(innerVarible);
//       console.log("Это вызов innerFunction");
//    };
//    return innerFunction;
// };

// const fnB = fnA();

// fnB();
// console.log(fnB);
// ! *__________________________________________________________________*

// ?Поворенок задача

// const makeDish = function (sheffName, dish) {
//    console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Leo', "суп");
// makeDish("Leo", "салат");
// makeDish("Leo", "пицца");

// makeDish("Kira", "борщ");
// makeDish("Kira", "картофель");
// makeDish("Kira", "штрудель");

// const makeSheff = function (name) {
//    const makeDish = function (dish) {
//       console.log(`${name} готовит ${dish}`);
//    };
//    return makeDish;
// };

// const leo = makeSheff('Leo');
// leo('кофе');
// leo('фреш');

// const kira = makeSheff('Kira');
// kira('чай');
// kira('лимонад');

// ! *__________________________________________________________________*

// ?Округлятор

// const floatingPoint = 3.5896;
// const someInt = Math.round(floatingPoint); 3
// const withDecimals = Number(floatingPoint.toFixed(2)); 3.58

// const rounder = function (number, places) {
//    return Number(number.toFixed(places));
// };

// console.log(rounder(3.9966, 2));
// console.log(rounder(4.56563, 3));
// ! *__________________________________________________________________*

// ?Округлятор замыкания

// const rounder = function (places) {
//    return function (number) {
//       return Number(number.toFixed(places))
//    }
// }

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(3.9966));
// console.log(rounder3(4.56563));
// ! *__________________________________________________________________*

// ?Приватнные данные и функции - скрытие реализации, интерфейса

// // функция вскрывания как отдельную переменную
// const salaryManagerFactory = function (emloyeeName, baseSalary) {
//    let salary = baseSalary;


// // возращает обьект и вызов методов
//    return {
//       raise(amount) {
//          if (amount > 1000){
//             return 'OK';
//          }
//           salary += amount;
//       },
//       lower(amount) {
//          salary -= amount;;
//       },
//       current() {
//          return `Текущая зарплата ${emloyeeName} - ${salary}`;
//       },
//    };
// };

// const salaryManager = salaryManagerFactory('Leo', 10000);

// console.log(salaryManager.current());
// console.log(salaryManager.raise(5000));

// console.log(salaryManager.current());

// ! *__________________________________________________________________*

// ?ЗАДАЧА по концепции

// const myLibFactory = function () {
//    let value = 0;

//    const add = function (num) {
//       value += num;
//    };

//    return {
//       add: add,
//       getValue() {
//          return value;
//       },
//    };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLibFactory());
// myLib.add(12);
// console.log(myLib.getValue());

// ! *__________________________________________________________________*

// !СТРЕЛОЧНАЯ ФУНКЦИЯ (синтаксис =>)

// ?Обьявление
// Явный и не явный возрат
// Аргументы
// Не явный возрат обьекта

// const add = function (a, b, c) {
//    console.log(a, b, c);
//    return a + b + c;
// };

// const addArrow = (a, b, c) => {
//    console.log(a, b, c);
//    return a + b + c;
// };
// console.log(add(20, 35, 55));
// ! *__________________________________________________________________*
// // Если параметрет только один можно пропустить скопки
// const addArro = a => {
//   console.log(a);
//   return a;
// };

// // Если нет пораметра
// const addArroq = () => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// // Явный возрат
// const addArroww = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };

// // Не явный возрат (вырожение может быть только одно)
// const addArr = (a, b, c) => {
//     return a + b + c;
// };

// const addArra = (a, b, c) => a + b + c;

// //Получить все аргументы(у стрелочнных функций нет аргумента)
// const addArrx = (...args) => {
//   console.log(args);
//   };
// ! *__________________________________________________________________*

// // Как вернуть результат выражения правильное действие

// const fnA = () => ({ arroA: 12 })

// console.log(fnA());

// // Не правильное действие вырожения
// const fnB = () => { arroB: 12 };

// console.log(fnB());
// ! *__________________________________________________________________*

// !Синтаксис стрелочнных функций

// ?с параметрами

// const add = (a, b) => {
//    // console.log('hello');
//    return a + b;
// };

// console.log(add(10, 12));

// ?с одним праметром

// const addMessage = message => {
//    console.log(message);
// };

// console.log(addMessage('hello'));

// ?без праметров

// const red = () => {
//    console.log('hello');
// }

// red();
// ! *__________________________________________________________________*

// ?Явный возврат(explicit)

// const add = (a, b) => {
//    return a + b;
// };

// console.log(add(10, 12));
   
// ?НЕ явный возрат (implicit)

// const add = (a, b) => a + b;

// console.log(add(10, 12));
// ! *__________________________________________________________________*

// !Контекст стрелки

// Контескст внутри стрелки определяеться местом ее обьявления, а не вызова
// и ссылаеться на контекст родительской функции

// const showThis = () => {
//    console.log('this in shoeThis: ', this);
// };

// showThis() //this in showThis: window
 
// const user = { name: 'Leo' };
// user.showContext = showThis;

// user.showContext(); //this in showThis: window
 
// ! *__________________________________________________________________*
// ?Задачка

// const user = {
//    fullName: 'Leo',
//    showName() {
//       console.log('this: ', this);
//       console.log('this.fullName: ', this.fullName);

//       // запомнилась в контексте меню
//       const inner = () => {
//          console.log('this in inner: ', this);
//       };
//       inner();
//    },
// };

//  !👎Стрелка как методы обькта

// const user = {
//    fullName: 'Leo',
//    showName() => {
//       console.log('this: ', this);
//       console.log('this.fullName: ', this.fullName);
//    },
// };

// user.showName();
// ! *__________________________________________________________________*

// ?Стрелочная функция это не конструктор не может быть
// !👍
// const userName = function (name) {
//    this.name = name;
// };

// console.log(new userName('Leo'));

// !👎
// const userName = name => {
//    this.name = name;
// };

// console.log(new userName('Leo'));
// ! *__________________________________________________________________*

//  
// const objA = {
//    x: 15,
//    showX() {
//      console.log("this в objA.showX: ", this);
//      console.log(this.x);
   //   !👎
//      const objB = {
//        b: 25,
//        showThis: () => {
//          console.log("this в objB.showThis: ", this);
//        },
//      };
//      objB.showThis();
//    },
// };
// objA.showX();
// ! *__________________________________________________________________*