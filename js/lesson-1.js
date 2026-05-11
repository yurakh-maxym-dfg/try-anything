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
