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

// const salaryManagerFactory = function (emloyeeName, baseSalary) {
//    let salary = baseSalary;

//    const changeBy = function (amount) {
//       salary += amount;
//    };

//    return {
//       raise(amount) {
//          changeBy(amount);
//       },
//       lower(amount) {
//          changeBy(amount);
//       },
//       current() {
//          return `Текущая зарплата ${emloyeeName} - ${salary}`;
//       },
//    };
// };

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
