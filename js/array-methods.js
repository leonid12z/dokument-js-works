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