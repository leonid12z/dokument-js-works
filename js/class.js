// !КЛАССЫ
// объявление
// конструктор
// методы
// static
// приватные свойства
// синтаксис публичных свойства и методы классов
// геттеры и сетторы
// *!________________________________________________________________*
const Car = function ({ brand, model, price } = {}) {
   this.brand = brand;
   this.model = model;
   this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
   this.price = newPrice;
};

Car.description = 'Класс описывающий автомобиль';

Car.logInfo = function (carObj) {
   console.log('Car.logInfo -> carObj', carObj);
};

const car = new Car({
   brand: 'BMW',
   model: 'X5',
   price: 90000,
});