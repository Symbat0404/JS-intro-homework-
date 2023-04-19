//   1. Вам дана переменная str = ‘LIGHTCODE PROGRAMMING’. Выведите в консоль длину первого слова.

// let str = 'LIGHTCODE PROGRAMMING';
// let words = str.split(" ");
// let firstWordLength = words[0].length; 
// console.log(firstWordLength); 

//   2. Вам дана переменная str = 'Максимально УЖАСНО'. Выведите в консоль слово УЖАСНО, только нижним регистром.

// let str = 'Максимально УЖАСНО';
// console.log(str.toLowerCase('УЖАСНО'));

//   3. Вам дана переменная str = 'максимально УЖАСНО'. Выведите в консоль слово максимально, только верхним регистром.

// let str = 'максимально УЖАСНО';
// console.log(str.toUpperCase('максимально'));

//   4. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль 'мально Ужасно', используя метод slice.

// let str = 'Максимально Ужасно';
// console.log(str.slice(5));

//   5. Вам даны переменные str = 'Максимально', str2 = 'Ужасно'. Выведите в консоль соединенные строки

// let str = 'Максимально';
// let str2 = 'Ужасно';
// console.log(str  + ' ' + str2);

//   6. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс слова 'Ужасно'.

// let str = 'Максимально Ужасно';
// console.log(str.indexOf('Ужасно'));

//   7. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль "встречается более 1 раза", если букв 'a' встречается более 1 раза, 
// иначе "встречается менее одного раза"

// let str = 'Максимально Ужасно';
// let aCount = (str.toLowerCase().split('a').length - 1); 
// if (aCount > 1) {
//   console.log("встречается более 1 раза");
// } else {
//   console.log("встречается менее одного раза");
// }

//    8. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого вхождения буквы а.

// let str = 'Максимально Ужасно';
// let index = str.indexOf('а');
// console.log(index);

//    9. Вам дана переменная str = 'Максимально Ужасно'. Выведите в консоль индекс первого последнего буквы о.

// let str = 'Максимально Ужасно';
// let index = str.lastIndexOf('о');
// console.log(index);

//    10. Вам дана переменная str = 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами (через substr, substring, slice) 
// и выведите в консоль.

// (slice)
// let str = 'aaa bbb ccc';
// console.log(str.slice(4, 7)); 

// (substr)
// let str = 'aaa bbb ccc';
// console.log(str.substr(4, 4)); 

// (substring)
// let str = 'aaa bbb ccc';
// console.log(str.substring(4, 7)); 