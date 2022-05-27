// !Обьекты примеры два

 // ?Операция (spread) распыление
   
   // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
   
   // const numbers = [...[1, 2, 3], ...[4, 5, 6], ...[7, 8, 9]];
   
   // console.log(numbers);
   
// *!____________________________________________________________*
   
   // ?Поиск самой маленькой и больлшой температуры (числа)
   
   // const temps = [20, 50, 4, 15, 12, 33];
   
   // console.log(Math.max(5, 10, 25, 80, 99));
   // console.log(Math.min(...temps));
   // console.log(temps)
   
   // *!____________________________________________________________*
   
   // ?Сложные типы
   
   // const a = [{ a: 1 }, { b: 2 }, { c: 3 }];
   
   // const b = [...a];
   
   // console.log('a: ', a);
   // console.log('b: ', b);
   
   // console.log(a[0] === b[0]);
// console.log(a === b);

// *!____________________________________________________________*

 // ?Сшивание несколько массивов в один через concat() и spread

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

// console.log(allTemps);

// *!____________________________________________________________*
   
// ?Распыление обьектов
// Object.prototype.assing() i spread

// const a = { x: 1, y: 5 };
// const b = { x: 0, s: 7 };

// // const c = Object.assign({ name: 'Leo' }, a, b);

// const c = {
//    ...a,
//    x: 15,
//    ...b,
//    y: 25,
// };

// console.log(c);

// *!____________________________________________________________*

// ?Задача по распылению деркоративного кода

// const defaultSettings = {
//    theme: 'light',
//    showNotifications: true,
//    hideSidebar: false,
// };

// const userSettings = {
//    showNotifications: false,
//    hideSidebar: true,
// };

// const finalSettings = {
//    ...defaultSettings,
//    ...userSettings
// };

// console.log(finalSettings);

// *!____________________________________________________________*

// ?Деструкторизация обьектов
// Значение по умолчанию
// Имя переменной отличное от имени своейств

// const playlist = {
//      name: 'Мой супер плей лист музыки',
//      rating: 5,
//      tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
//      tracksCount: 7,
// };
   
// const { name, rating, tracks, tracksCount } = playlist;

// console.log(name, rating, tracks, tracksCount);

// *!____________________________________________________________*

// ?Глубокая деструкторизация

// const playlist = {
//   name: 'Jo Ride',
//   tag: 'jgluke',
//   location: 'Ocho Rios Ja',
//    avatar: "https://ad.admitad.com/g/u1q0hccbxn4501b0522d34acc90a61",
//    stats: {
//       followers: 1234,
//       views: 9876,
//       likes: 5678
//   },
// };

// const {
//    name,
//    tag,
//    location,
//    avatar,
//    stats: { followers, views, likes },

// } = playlist;

// console.log(name, tag, location, avatar, followers, views, likes);

// *!____________________________________________________________*

// ?Деструкторизация массивов

// const rgb = [200, 150, 25];
// const [red, green, blue] = reb;

// // console.log(red, green, blue);

// const authors = {
//    Jo: 10,
//    Givi: 90,
//    Leo: 33,
//    Koli: 45,
// };

// const entries = Object.entries(authors);

// // console.log(entries);

// for (const entry of entries) {
//    const name = entry[0];
//    const rating = entry[1];

//    console.log(name, rating);
// };

// *!____________________________________________________________*

// ?Операция rest (сбор)

// const playlist = {
//   name: 'Jo Ride',
//   tag: 'jgluke',
//   location: 'Ocho Rios Ja',
//    avatar: "https://ad.admitad.com/g/u1q0hccbxn4501b0522d34acc90a61",
//    stats: {
//       followers: 1234,
//       views: 9876,
//       likes: 5678
//   },
// };

// const { name, tag, location, ...restProps } = playlist;

// console.log(name, tag, location);
// console.log(restProps);
// console.log(playlist);

// *!____________________________________________________________*

// ?Паттерн обьекта настроек
// Деструкоторизация параметры - обьекта в подписи функции
// rest при деструкторизации подписки

// const profile = {
//   name: 'Jo Ride',
//   tag: 'jgluke',
//   location: 'Ocho Rios Ja',
//    avatar: "https://ad.admitad.com/g/u1q0hccbxn4501b0522d34acc90a61",
//    stats: {
//       followers: 1234,
//       views: 9876,
//       likes: 5678
//   },
// };

// const makeProfileMarkup = function (userProfile) {
//    const {
//       avatar = 'https://ad.admitad.com/g/u1q0hccbxn4501b0522d34acc90a61',
//       name,
//       tag,
//       location = 'Planet Red',
//       stats: { followers, views, likes },
//    } = userProfile;

//    return `<div>
//    <img src = "${avatar}" alt = "user avatar">
//    <p>${name}<span>@${tag}</span></p>
//    <p>Location: ${location}</p>
//    <ul>
//    <li>Followers: ${followers}<li>
//    <li>Views: ${views}<li>
//    <li>Likes: ${likes}<li>
//    </ul>
//    </div>`;
// };

// const markup = makeProfileMarkup(profile);

// console.log(markup);

// document.body.insertAdjacentHTML('afterbegin', markup);

// *!____________________________________________________________*

// ?Задача по обьектам (кашолка товара)
// Работа колекции товара в корзине 

// const cart = {
//    items: [],
//    getItems() { 
//       return this.items
//    },
//    add(product) {
//       console.table(this.items);

//       for (const item of this.items) {
//          console.log(item);

//          if (item.name === product.name) {
//             item.quantity += 1;

//             return;
//             // console.log('Такой продукт ужеесть ', product.name);
//          }
//       }

//       const newProduct = {
//          ...product,
//          quantity: 1, 
//       }
//       this.items.push(newProduct)
//     },
//    remove(productName) { 
//       const { items } = this;

//       for (let i = 0; i < items.length; i += 1) {
//          const { name } = items[i];

//          if (productName === name) {
//             console.log('Нашли такой продукт ', productName);
//             console.log('Это индекс ', i);

//             items.splice(i, 1);
//          }
//       }
//    },
//    clear() { 
//       this.items = [];
//    },
//    countTotalPrice() {
//       const { items } = this;
//       let total = 0;

//       for (const { price, quantity } of items) {
//          total += price * quantity;
//      }

//       return total;

//     },
//    increaseQuantity(productName) { },
//    decreaseQuantity(productName) { },
// };

// console.log(cart.getItems());

// cart.add({ name: '🍏', price: 50 });
// cart.add({ name: '🍌', price: 70 });
// cart.add({ name: "🍌", price: 70 });
// cart.add({ name: '🍓', price: 120 });
// cart.add({ name: '🍒', price: 150 });
// cart.add({ name: "🍒", price: 150 });
// cart.add({ name: "🍒", price: 150 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove("🍏");
// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// cart.increaseQuantity("🍓");
// console.table(cart.getItems());

// cart.decreaseQuantity("🍌");
// cart.decreaseQuantity("🍌");
// console.table(cart.getItems());

// *!____________________________________________________________*