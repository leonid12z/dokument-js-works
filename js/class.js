// !КЛАССЫ
// объявление
// конструктор
// методы
// static
// приватные свойства
// синтаксис публичных свойства и методы классов
// геттеры и сетторы
// *!________________________________________________________________*
// Пример
// const Car = function ({ brand, model, price } = {}) {
//    this.brand = brand;
//    this.model = model;
//    this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//    this.price = newPrice;
// };

// Car.description = 'Класс описывающий автомобиль';

// Car.logInfo = function (carObj) {
//    console.log('Car.logInfo -> carObj', carObj);
// };

// const car = new Car({
//    brand: 'BMW',
//    model: 'X5',
//    price: 90000,
// });
// *!________________________________________________________________*
// !Пример выполнения класса конструкотра
// class Car {
// // Статика метод
//    static description = 'Класс описывающий автомобиль';

//    static logInfo(carObj) {
//    console.log('Car.logInfo -> carObj', carObj);
// };
   
// // Классы
//    constructor({ brand, model, price } = {}) {
//       console.log('Выполняеться constructor');
//       console.log(this);

//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//    }

//    // Прототипы
//    changePrice(newPrice){
//       this.price = newPrice;
//    }

//    updateModel(newModel) {
//       this.model = newModel;
//    }
// }


// console.log(Car);
// console.log(Car.description);

// const carInstance = new Car({
//    brand: 'BMW',
//    model: 'X5',
//    price: 90000,
// });

// // console.log(carInstance);
// console.log(carInstance.model);
// carInstance.model = 'X6';

// console.log(carInstance.model);
// console.log(carInstance.getModel());


// Car.logInfo(carInstance);
// console.log(Object.getPrototypeOf(carInstance) === Car.prototype);

// *!________________________________________________________________*
// ?Геторы и сеторы
// class Car {
//   // Статика метод
//   static description = "Класс описывающий автомобиль";

//   static logInfo(carObj) {
//     console.log("Car.logInfo -> carObj", carObj);
//   }

//   // Классы
//   constructor({ brand, model, price } = {}) {
//     console.log("Выполняеться constructor");
//     console.log(this);

//     this.brand = brand;
//     this._model = model;
//     this._price = price;
//   }

//   // Прототипы
//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   get model() {
//    return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }
// }

// console.log(Car);
// console.log(Car.description);

// const carInstance = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: 90000,
// });

// console.log(carInstance.model);
// carInstance.model = "X6";
// console.log(carInstance.model);

// console.log(carInstance.price);
// carInstance.price = 50000;
// console.log(carInstance.price);

// console.log(carInstance);
// *!________________________________________________________________*
// !Наследование
// -extends
// -super()

// class Hero {
//    constructor({name = 'hero', xp = 0 } = {}) {
//       this.name = name;
//       this.xp = xp;
//    }

//    gainXp(amount) {
//       console.log(`${this.name} получает ${amount} опыт`);
//       this.xp = amount;
//    }
// }
// class Warrior extends Hero {
//    constructor({weapon, ...restProps} = {}) {
//       super(restProps);

//       this.weapon = weapon;
//    }

//    attack() {
//       console.log(`${this.name} атака проходит успушно ${this.weapon}`);
//    }
// }

// class Mage extends Hero{
//    constructor({spells, ...restProps} = {}) {
//       super(restProps);

//       this.spells = spells;
//    }

//    cast() {
//       console.log(`${this.name} что-то кастует?`);
//    }
// }

 
// const mango = new Warrior({name:'mango', xp: 1000, weapon:'voin'});
// console.log(mango);

// const poli = new Mage({name:'poli', xp: 500, spells:['goblin']});
// console.log(poli);
// poli.cast();
// poli.gainXp(300);

// console.log('mango.__proto__ === Warrior.prototype',
//    mango.__proto__ === Warrior.prototype);

// // console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log('Warrior.prototype.__proto__ === Hero.prototype',
//    Warrior.prototype.__proto__ === Hero.prototype);
// *!________________________________________________________________*