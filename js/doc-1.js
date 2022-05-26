// !ЗАДАЧИ ОБЪЕКТЫ!
  
// ?Обьекты(делаем плейлист музыки: имя, рейтинг, треки, кол - во треков)
// ?Литерал обьекты
// ?Свойства кллюч: (имя) и значение
// ?Как отлечить обьект от облости видимости

// const playlist = {
   //   name: 'Мой супер плей лист музыки',
//   rating: 5,
//   tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
//   tracksCount: 7,
// };

// console.log(playlist);

// !**********************************************!

// const x = {};

// const fn = function (myObject) {
   // myObject = { a: 1, d: 2 }
   //    console.log(myObject);
   // };
   
// !**********************************************!
   
   // fn({ a: 1, d: 2 });
   
   // const rtFm = function () {
      //    return { a: 12 };
      // }
      
      // console.log(rtFm());
      
// !Три юскейса облости видимости
// *!____________________________________________________________*

// ?Доступ к свойству
// obj.key
// obj['key']
// Отсуствие ствойства

// const playlist = {
   //   name: 'Мой супер плей лист музыки',
   //   rating: 5,
   //   tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
   //   tracksCount: 7,
   // };
   
   // console.log(playlist.name);
   // console.log(playlist.rating);
   
// *!____________________________________________________________*
   
   // ?Короткие запись свойстава
   
   // const username = 'Leo';
   // const email = 'Leo@gmail.com';
   
   // const signupData = {
      //    username,
      //    email,
      // };
      
      // console.log(signupData);
      
 // *!____________________________________________________________*
      
      // ?Вычесляемые слвойства
      // ?<input name = 'color' value = 'red'>
      
      // const inputName = 'color';
      // const inputValue = 'red';
      
      // const colorPickerData = {
         //    [inputName]: inputValue,
         // };

         // console.log(colorPickerData);

// *!____________________________________________________________*

// ?Ссылочный тип {} === {}

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 250;
// b.hello = 500;

// console.log(a);
// console.log(b);

// *!____________________________________________________________*

// !МЕТОДЫ ОБЬЕКТА И this ПРИ ОБРАЩЕНИЯМ СВОЙСТВАМ В МЕТОДАХ

// const playlist = {
   //   name: 'Мой супер плей лист музыки',
   //   rating: 5,
   //   tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
   //   tracksCount: 7,
   //    getName() {
      //       console.log('Это функция метода getName');
      //   },
      // };
      
      // console.log(playlist);
      // playlist.getName(12);
      
      // *!____________________________________________________________*
      
      // ?В нутри методов обьекта не когда не исапользовать.Имя сомого обьекта.
      // Внутри функции есть ключевое слово(this) ссылка на тот обьект куда вызванна.
      // Не используем имя переменной(playlist) а используем мотод(this) к обьекту лежит
      // ссылка на этот обьект.
      
      // const playlist = {
//   name: 'Мой супер плей лист музыки',
//   rating: 5,
//   tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
//   tracksCount: 7,
//   changeName(newName) {
//      console.log('this внутри changeName', this);

//      this.name = newName;
//   },
// };

// playlist.changeName('Новое имя');

// console.log(playlist);

// *!____________________________________________________________*

// ?Задача по метадам обьекта

// const playlist = {
   //   name: 'Мой супер плей лист музыки',
   //   rating: 5,
   //   tracks: [trec - 1, trec - 2, trec - 3, trec - 4],
   //   tracksCount: 7,
   //   changeName(newName) {
      //      console.log('this внутри changeName', this);
      
      //      this.name = newName;
      //    },
      //    addTrack(track) {
         //       this.tracks.push(track);
         //    },
         //    updateRating(newRating) {
            //       this.rating = newRating;
            //    },
            //    getTrackCount() {
               //       return this.tracks.length;
               //    },
               // };
               
               // console.log(playlist.getTrackCount());
               
               // playlist.changeName('Новое имя');
               
// playlist.addTrack('Новый терек-1');
// console.log(playlist.getTrackCount());

// playlist.addTrack('Новый терек-2');
// console.log(playlist.getTrackCount());

// playlist.updateRating(9);

// *!____________________________________________________________*

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

  // ?Получаем имена друзей которые только (online)

//   const friends = [
//   { name: "Vini", online: false },
//   { name: "Den", online: true },
//   { name: "Leo", online: true },
//   { name: "Arni", online: false },
//   { name: "Pit", online: false },
// ];

// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//    const onlineFriends = [];

//    for (const friend of allFriends) {
//       console.log(friend);
//       console.log(friend.online);

//       if (friend.online) {
//          onlineFriends.push(friend)
//       }
//    }
//    return onlineFriends;
// };

// console.log(getOnlineFriends(friends));

// !Если не онлайн друзья подставить нужно вот такое значение

// !) if (friend.online) {
   //  offlineFriends.push(friend)
// }

// *!________________________________________________________*

// !Задача - Создать два массива онлайн и офлайн
// если тру то впервую ячейку
// если фолпс то во воторую ячейку

// const getFriendsByOnlineStatus = function (allFriends) {
//    const friendsByStatus = {
//       online: [],
//       offline: [],
//    };

//    for (const friend of allFriends) {
//       if (friend.online) {
//          friendsByStatus.online.push(friend);
//          continue;
//       }

//       friendsByStatus.offline.push(friend);

      
//       // const key = friend.online ? 'online' : 'offline';
//       // friendsByStatus[key].push(friend);
//    }

//    return friendsByStatus;
// };

// console.log(getFriendsByOnlineStatus(frames));

// *!________________________________________________________*

  