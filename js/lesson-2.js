// Task 1

// let styles = ["jazz", "blues"];


// styles.push("rock-n-roll");

// styles[1] = ["classic"];

// function logItems(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1} - ${array[i]}`);
//     }
// }

// logItems(styles);


// Task 2

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//     const userLogin = prompt('Enter your login');
//     if (array.includes(userLogin)) {
//         alert(`Welcome, ${userLogin}!`);
//     } else {
//         alert('User not found');
//     }
// }
// checkLogin(logins);

// Task 3


// function calculateAverage(...args) {
//     let sum = 0;
    
//     for (const num of args) {
//         if (typeof num !== 'number' || Number.isNaN(num)) {
//             return 'That not a number!';
//         }
//         sum += num;
//     }
//     const averg = sum / args.length;
//     return averg;
// }

// console.log(calculateAvarage(1, 2, 3, 4, 5, 6, 7, 8));

// Task 4

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function summNumArray(array) {
//     const sumArr = [];
//     for (let i = 0; i < array.length - 1; i++){
//         sumArr.push(array[i] + array[i + 1]);
//     }
//     return sumArr;
// }

// console.log(summNumArray(someArr));

// Task 5
const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
    if (!Array.isArray(numbers)) {
        return 'That not an array!';
    }
    let res = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < res) {
            res = numbers[i];
        }
    }
    return res;
}

console.log(findSmallestNumber(numbers));