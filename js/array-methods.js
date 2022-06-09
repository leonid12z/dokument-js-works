// !Пребирающие методы массива
// -Методы массива
//    - forEach
//    - map
//    - filter
//    - find
//    - everi i some
//    - reduce
//    - sort
// -Чейтинг методов

// !Array.prototype.forEach(callback(currentValue, index, array), thisArg)
// Поэлиментно преребирает орегинальный массив
// Ничего не возращает
// Заменяет класичесский for, если не нужно прерывать

// const numbers = [10, 20, 25, 35, 55];

// numbers.forEach(
//    function (number) {
//       console.log('number', number);
//         },
//   );

// console.log(numbers);
// *!________________________________________________________________*
// !Array.prototype.map()
// Поэлементно перебирает орегинальный массив
// Не измення орегинальный массив
// Возращает орегинальный массив такойже дленны

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//    console.log(number);

//    return number * 3;
// });
// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);
// *!________________________________________________________________*
// const players = [
//   { id: "player-1", name: "Leo", timePlayed: 300, points: 50, online: false },
//   { id: "player-2", name: "Piti", timePlayed: 150, points: 90, online: true },
//   { id: "player-3", name: "Givi", timePlayed: 500, points: 15, online: false },
//   { id: "player-4", name: "Aleks", timePlayed: 340, points: 86, online: true },
//   { id: "player-5", name: "Vidi", timePlayed: 280, points: 33, online: false },
// ];
// *!________________________________________________________________*
// ?Получаем массив имен игроков и айди

// const playerNames = players.map(player => player.name);
// console.log("playerNames", playerNames);

// const playerIds = players.map(player => player.id);
// console.log("playerIds", playerIds);

// const red = players.map(({ name, online }) => ({ name, online }));
// console.log('red', red);
// *!________________________________________________________________*
// ?Уваеличиваем кол-во поинтов кождого играка на 10%

// const upatedPlayers = players.map(player => ({
//    ...player,
//    points: player.points * 1.1,

// }));
// console.log(upatedPlayers);
// console.table(upatedPlayers);
// *!________________________________________________________________*
// ?Увиличеваем кол-во часов по id

// const playerIdToUpdate = 'player-3';

// const upatedPlayers = players.map(player => {
//    // вот мы нашли кого нужно обновоить
//    if (playerIdToUpdate === player.id) {
//       // это будет обновленный обьект
//       return {
//          ...player,
//          timePlayed: player.timePlayed + 100,
//       };
//    }
//    return player;
// });

// ?Увелечение кол-во часов по id, свойство тернального аператора

// const playerIdToUpdate = "player-3";

// const upatedPlayers = players.map(player => playerIdToUpdate === player.id ? {
//    ...player, timePlayed: player.timePlayed + 100
// } : player,
// );

// console.table(upatedPlayers);
// *!________________________________________________________________*
// !Array.prototype.filter()
// Поэлементно перебирает оригинальный массив
// Возращает новый массив(с элиментами или пустой)
// Добобляет в возвращаемый массив элементов который удовлетворяет условия коллбек - функций
// Если коллбек врернул элемент true добовляеться в возращаемый массив
// Если коллбек вернул элемент НЕ focus добовляеться в возвращаемый массив

// const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers = numbers.filter(number => number > 15);
//    // console.log(number);
 
// console.log(filteredNumbers);
// *!________________________________________________________________*
// const players = [
//   { id: "player-1", name: "Leo", timePlayed: 300, points: 50, online: false },
//   { id: "player-2", name: "Piti", timePlayed: 150, points: 90, online: true },
//   { id: "player-3", name: "Givi", timePlayed: 500, points: 15, online: false },
//   { id: "player-4", name: "Aleks", timePlayed: 340, points: 86, online: true },
//   { id: "player-5", name: "Vidi", timePlayed: 280, points: 33, online: false },
// ];
// *!________________________________________________________________*

// ?Получаем масив всех онлайн игроков

// const onlinePlayer = players.filter(player => player.online);
// console.log(onlinePlayer);
// *!________________________________________________________________*
// ?Получаем масив всех  НЕ онлайн игроков

// const offlinePlayer = players.filter(player => !player.online);
// console.log(offlinePlayer);
// *!________________________________________________________________*
// ?Получи харкорднных игроков в которых время больше 300

// const hardcorePlayer = players.filter(player => player.timePlayed > 300);
// console.log(hardcorePlayer);
// *!________________________________________________________________*
// !Array.prototype.find()
// Поэлементно перебирает оригинальный массив
// Возращает первый элемент удовлетвораяющий условия или undefined

// const numbers = [5, 10, 15, 20, 25];

// const number = numbers.find(number => number === 10);
// console.log(number);
// *!________________________________________________________________*
// const players = [
//   { id: "player-1", name: "Leo", timePlayed: 300, points: 50, online: false },
//   { id: "player-2", name: "Piti", timePlayed: 150, points: 90, online: true },
//   { id: "player-3", name: "Givi", timePlayed: 500, points: 15, online: false },
//   { id: "player-4", name: "Aleks", timePlayed: 340, points: 86, online: true },
//   { id: "player-5", name: "Vidi", timePlayed: 280, points: 33, online: false },
// ];
// *!________________________________________________________________*
// ?Ищем игрока по id

// const playerIdToFind = 'player-3';

// const playerWithId = players.find(player => player.id === playerIdToFind);
// console.log(playerWithId);

// ?Деструкторизация пример
// const playerIdToFind = 'player-5';

// const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);
// *!________________________________________________________________*
// ?Ищем игрока по имени

// const playerNameToFind = 'Leo';

// const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName);
// *!________________________________________________________________*
// ?Деструкторизация пример
// const playerIdToFind = 'player-5';

// const playerWithId = players.find(({ name }) => name === playerIdToFind);
// console.log(playerWithId);
// *!________________________________________________________________*
// ?Пример функции по id

// const finPlayerById = (allPlayer, playerId) => {
//    return allPlayer.find(player => player.id === playerId);
// };

// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'players-5'));

//  ?Деструкторизация пример

// const finPlayerById = (allPlayer, playerId) =>
//    allPlayer.find(({ id }) => id === playerId);
   
// console.log(finPlayerById(players, 'player-1'));
// console.log(finPlayerById(players, 'players-5'));
// *!________________________________________________________________*
// const players = [
//   { id: "player-1", name: "Leo", timePlayed: 300, points: 50, online: false },
//   { id: "player-2", name: "Piti", timePlayed: 150, points: 90, online: true },
//   { id: "player-3", name: "Givi", timePlayed: 500, points: 15, online: false },
//   { id: "player-4", name: "Aleks", timePlayed: 340, points: 86, online: true },
//   { id: "player-5", name: "Vidi", timePlayed: 280, points: 33, online: false },
// ];
// *!________________________________________________________________*
// !Array.prototype.every()
// Поэлементно прербирает орегинильный массив
// Возращает true если все элементы массива удовлетворяет условия

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);
// *!________________________________________________________________*
// !Array.prototype.some()
// Поэлемнтно перебирает орегинальный массив
// возвращает true если хотя бы один элемнт массива удовлетворяет условия

// const isAnlOnline = players.some(player => player.online);
// console.log('isAnlOnline: ', isAnlOnline)

// const anyHardcorePlayers = players.some(player => player.timePlayed > 300);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
// *!________________________________________________________________*
// !Array.prototype.reduce()
// Поэлементно перебирает оригинальный массив
// Возращает что угодно
// Заменяет все на свете, но использовать нужно с умом

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {
//    console.log('acc: ', acc);
//    console.log('number: ', number);

//    return acc + number;
// }, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25
// *!________________________________________________________________*
// ?Считывает общую зарплату

// const salary = {
//    mango: 100,
//    leo: 250,
//    den: 50,
// };

// const totalSalary = Object.values(salary).reduce((total, value) => {
//    return total + value;
// }, 0);
// console.log(totalSalary);
// *!________________________________________________________________*
// const players = [
//   { id: "player-1", name: "Leo", timePlayed: 300, points: 50, online: false },
//   { id: "player-2", name: "Piti", timePlayed: 150, points: 90, online: true },
//   { id: "player-3", name: "Givi", timePlayed: 500, points: 15, online: false },
//   { id: "player-4", name: "Aleks", timePlayed: 340, points: 86, online: true },
//   { id: "player-5", name: "Vidi", timePlayed: 280, points: 33, online: false },
// ];
// *!________________________________________________________________*
// ?Считываем общую количество часов игрока

// const totalTimePlayer = players.reduce((totalTime, player) =>
//     totalTime + player.timePlayed,
//    0,
// );
//    console.log(totalTimePlayer);
// *!________________________________________________________________*
// ?Считываем общую сумму товаров корзины

// const cart = [
//   { label: "Apples", price: 100, quantity: 2 },
//   { label: "Bananas", price: 150, quantity: 3 },
//   { label: "Lemons", price: 80, quantity: 4 },
// ];

// const totalAmonut = cart.reduce
//    ((totol, { price, quantity }) => totol + price * quantity,
//    0,
// );
// *!________________________________________________________________*
// ?Собираем все теги из твитов

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 3, tags: ["html", "css"] },
//   { id: "002", likes: 12, tags: ["js", "css", "nodejs"] },
//   { id: "003", likes: 6, tags: ["js", "nodejs", "html"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "js", "react"] },
// ];

// const allTags = tweets.reduce((acc, tweet) => {
//    return [...acc, ...tweet.tags];
// }, []);
// console.log(allTags);

// пошаговый разбора примера
// 1 - й
// acc = [], tweet.tags = ["js", "nodejs"] return [...[], ...["js", "nodejs"]]
// 2 - й
// acc = ["js", "nodejs"] tweet.tags = ["js", "nodejs"]
// 3 - й
// return [...["js", "nodejs"], ...["html", "css"]];
// ["js", "nodejs", "html", "css"];
// *!________________________________________________________________*
// ?Ведем статистику тегов

// const tagsStats = allTags.reduce((acc, tag) => {
//    console.log(acc);
   
//    // если свойство с ключем tag есть, увеличить его значение на 1
//    if (acc[tag]) {
//       acc[tag] += 1;

//       return acc;
//    }

//    // если совйства нет с таким ключем что в tag, сделать и записать 1
//    acc[tag] = 1;

//    return acc;
// }, {});
// console.log(tagsStats);

// ?Не мутабельное вариант

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   // если свойство с ключем tag есть, увеличить его значение на 1
//   if (acc[tag]) {
//          return {
//             ...acc,
//             [tag]: acc.tag + 1
//     };
//   }
//   // если совйства нет с таким ключем что в tag, сделать и записать 1
  
//    return {
//       ...acc,
//       [tag]: 1
//    };
//  }, {});
// console.log(tagsStats);
// *!________________________________________________________________*
// ?Пример с тернальным оператором

// const tagsStats = allTags.reduce((acc, tag) => ({
//    ...acc,
//    [tag]: acc[tag] ? acc[tag] + 1 : 1,
// }),
//    {},
// );
// console.log(tagsStats);
// *!________________________________________________________________*
// !Array.prototype.sort(callback(currentEl, nextEl){})
// Сортирует и ИЗМЕНЯЕТ орегинальный массив
// По умолчанию:
// - сортирует по возрастанию
// - приводит элементы к строке и сортирует по[Unicode](https://unicode-table.com/en/)

const nambers = [1, 9, 6, 2, 3];
console.log('nambers', nambers);

const letters = ['b', 'B', 'a', 'A'];
console.log('letters', letters);

