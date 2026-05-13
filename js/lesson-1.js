'use strict';

// Task 1

// // Запропонуйте користувачу ввести число за допомогою prompt().
// // Збережіть введене значення у змінну number.
// // Перевірте, чи дорівнює змінна number числу 10:
// //    Якщо так - виведіть повідомлення 'Вірно' у alert().
// //    Якщо ні - виведіть 'Невірно'.

// // Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// // перетворіть значення на число за допомогою Number().

// const num = prompt("Введіть число від 1 до 10:");

// // if (Number(num) === 10) {
// //     alert("Вірно");
// // } else {
// //     alert('Невірно');
// // }
// alert(num === 10 ? 'Вірно' : 'Невірно');

// Task 2

// const min = Math.floor(Math.random() * 59);

// if (min>=45) {
//     alert(`${min} входить в четверту чверть`);
// } else if (min>=30) {
//     alert(`${min} входить в третю чверть`);
// } else if (min>=15) {
//     alert(`${min} входить в другу чверть`);
// } else {
//     alert(`${min} входить в першу чверть`);
// }
 
// Task 3

// const num = Number(prompt('Введіть число від 1 до 4:'));
// let result = '';

// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'літо';
//         break;
//     case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
//         break;
// }
// console.log(result);

// Task 4

// const time = Number(prompt('Введіть час:'));
// const hours = Math.floor(time/60);
// const minutes = time % 60;

// const fixHours = String(hours).padStart(2, '0');
// const fixMitutes = String(minutes).padStart(2, '0');
// console.log(`${fixHours}:${fixMitutes}`);


// Task 5

// const login = prompt('Введіть свій логін:');
// const password = '';
// const rightPassword = 'Я головний';

// if (login === 'Адмін') {
//     const password = prompt("Введіть пароль:");
//     if (password === rightPassword) {
//         alert('Добрий день!');
//     }
//     else {
//         alert('Невірний пароль!');
//     }
// } else if (login === '' || login === null) {
//     alert('Скасовано');
// } else {
//     alert('Я вас не знаю');
// }

// TAsk 6

// let num = 0;

// while (num < 20) {
//     num += 1;
//     console.log(num);
// }

// Task 7
// let sum = 0;
// function getNumber(min, max) {
//     while (max >= min) {
//         if (max % 2 === 0) {
//             sum += max;
//         }
//         console.log(max);
//         max -= 1;
//     }
//     return console.log(sum);
// }

// getNumber(5, 15);

// Task 8

// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number!';
//     }
//         return a>b ? b : a;
// }

// console.log(min(6, 3));
// console.log(min('teto', 3));


// Task 9

// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         confirm("Your haven't 18 age. Continue?")
//     }
// }

// console.log(isAdult(19));
// isAdult(13);

// Task 10

// function fizzBuzz(num) {
//     if (num % 3 === 0 && num % 5 === 0) {
//         return 'fizzbuzz';
//     } else if (num % 5 === 0) {
//         return 'buzz';
//     } else if (num % 3 === 0) {
//         return 'fizz';
//     } else { 
//         return 'no fizz no buzz :('
//     }
// }

// console.log(fizzBuzz(3));
// console.log(fizzBuzz(5));
// console.log(fizzBuzz(15));
// console.log(fizzBuzz(22));

