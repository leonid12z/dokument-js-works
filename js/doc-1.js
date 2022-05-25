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

  // ?Получаем друзей которые только (onlan)

  // const friends = [
//   { name: "Vini", online: false },
//   { name: "Den", online: true },
//   { name: "Leo", online: true },
//   { name: "Arni", online: false },
//   { name: "Pit", online: false },
// ];

// console.table(friends);


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
   