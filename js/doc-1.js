// !ЗАДАЧИ ОБЪЕКТЫ!

// ?Работа с коллекцией (масивао объекта)

// const friends = [
//   { name: "Vini", online: false },
//   { name: "Den", online: true },
//   { name: "Leo", online: true },
//   { name: "Arni", online: false },
//   { name: "Pit", online: false },
// ];

// console.table(friends);

// *!________________________________________________________*

// ?Ищем друга по имени

// const findFriendByName = function (allFriends, friendName) {
//    for (const friend of allFriends) {
//       console.log(friend);
//       console.log(friend.name);

//       if (friend.name === friendName) {
//          return "Нашли!"
//       }
//    }

//    return "Не нашли!"
// };

// console.log(findFriendByName(friends, 'Leo'));
// console.log(findFriendByName(friends, 'Jo'));

// *!_____________________________________________________*

// ?Получаем имена всех друзей

// const getAllNames = function (allFriends) {
//    const names = [];

//    for (const friend of allFriends) {
//       console.log(friend.name);

//       names.push(friend.name);
//    }

//    console.log(names);
// };

// console.log(getAllNames(friends));

// *!________________________________________________________*

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

