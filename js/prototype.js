// !Прототипы наследия
// ?Прототипы обьекта

// https://miro.com/app/board/o9J_ku0WE0g=/
// Object.create()
// [[Prototype]] и __proto__
// Object.getPrototypeOf()
// Собственные совойстав и Object.prototype.hasOwnProperty()
// Цепочка прототипов

// const objC = {
//    b: 10,
// };

// const objB = Object.create(objC);
// objB.y = 15;

// const objA = Object.create(objB);
// objA.x = 5;

// console.log(objA.b);

// console.log('objA', objA);

// console.log(objA.hasOwnProperty('x'));
// *!________________________________________________________________*
// Это собственное совойство обьекта
// Это свойство на обьекте прототипе

// const dummyObj = Object.create({message: "Это свойство на обьекте прототипе"});
// dummyObj.message = "Это собственное совойство обьекта";
// console.log('dummyObj', dummyObj);

// console.log(dummyObj.message);
  
// *!________________________________________________________________*
// ?Алкоритм поиска свойств в цепочке прототипов
// 1. Поиск начинаеться в собственных свойствах
// 2. Если свосйства НЕТ в сообственных, поиск преходит в цепочку к цепочке прототипов
// 3. Посиск прекращаеться при первом совподенни(есть такое совойство)
// 4. Возращаеться значения свойства

// const objA = Object.create({ b: 10 });
// objA.y = 15;
// console.log('objA', objA);

// console.log(objA.x);
// *!________________________________________________________________*
// !Основы ООП: класс, экземпляр(обьект), интерфейс

// !Задача по Car
// ?Функции конструкторы
// Именование
// Оператор new
// Свойство Function.prototype

// 1.Если функция вызывается через new, создаеться пустой обьект
// const myCar = new Car({
//    brand: 'Audi'
//    model: 'Q3',
//    price: 35000
// });
// console.log(myCar);

// myCar.sayHi();
// myCar.changePrice(10000);

// const myCar2 = new Car({
//    brand: 'BMW'
//    model: 'X5',
//    price: 90000
// });
// console.log(myCar2);

// myCar2.sayHi();

// const myCar3 = new Car({
//    brand: 'Audi'
//    model: 'A6',
//    price: 75000
// });
// console.log(myCar3);

// myCar3.sayHi();

// // 2.Функция вызывается в контексте созданного обьекта, то есть в this ссылка на него
// const Car = function ({ brand, model, price } = {}) {
   
//    // 4.Ссылка обьект возращается в метсо вызова new Car
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
// };

// // 3.В свойство this.__proto__записываеться ссылка на обьект Car.prototype
// // тоесть Car.prototype это ПРОТОТИП будущего обьекта(экземпляра)
// Car.prototype.sayHi = function () {
//    console.log('Car.prototype.sayHi -> this', this);
//    console.log('Hello');
// };

// Car.prototype.changePrice = function (newPrice) {
//    this.price = newPrice;
// }

// console.log(Car.prototype);
// *!________________________________________________________________*
// ?Задача по User
// const User = function ({ email, password } = {}) {
//    this.email = email;
//    this.password = password;
// };

// User.prototype.changeEmail = function (newEmail) {
//    this.email = newEmail;
// };

// const mango = new User({ email: 'mango@gmail', password: 12121212 });

// mango.changeEmail('ma - ngo - mail-com');
// console.log(mango);
// *!________________________________________________________________*
// Статистика свойства и методы
// Статистика свойства и методы доступны только на самом конструкторы
// В статистики методах нет this

// User.message = 'Я статическое свойство, меня нет на экземплярах или в прототипе'

// User.logInfo = function (obj) {
//    console.log('User.logInfo -> obj', obj);
//    console.log('Почта:', obj.email)
//    console.log('Пароль:', obj.password);
// };

// User.logInfo(mango);
// *!________________________________________________________________*