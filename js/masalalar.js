// 1 - masala;

const numbers = [];

numbers.push(Number(prompt("raqam kiriting")));
numbers.push(Number(prompt("raqam kiriting")));
numbers.push(Number(prompt("raqam kiriting")));

const sumInput = function (number) {
  var num = 0;
  if (number != NaN) {
    for (let number of numbers) {
      num += number;
    }
  }
  return num;
};

console.log(sumInput(numbers));

// 2 - masala;
const words = ["Jazz", "Blues"];
// console.log(words);
words.push("Rock-n-roll");
// console.log(words);
words[Math.floor(words.length / 2)] = "Classik";
// console.log(words);
words.shift();
// console.log(words);
words.unshift("Rap", "Reggae");
console.log(words);

// 3 - masala;

const sumSalaries = function (sallerie) {
  let pay = 0;
  for (let sall of Object.values(salaries)) {
    pay += sall;
  }
  return pay;
};

let salaries = {
  Akmal: 1200,
  Salim: 5200,
  Karima: 1800,
};

console.log(sumSalaries(salaries));

// 4 - masala;
const arrays = [1, 2, 3, 4, 5, 4, 5,];
function calcNumbers(numb) {
  let array = [];
  let oddNumber = 0;
  let evenNumber = 0;
  for (let i = 0; i < numb.length; i++) {
    if (i % 2 === 0) {
      oddNumber += numb[i];
    } else if (i % 2 !== 0) {
      evenNumber += numb[i];
    } else if ((i === null) & (i === undefined)) {
      array.push([])
    }
  }
  array.push(oddNumber, evenNumber);
  return array;
}
console.log(calcNumbers(arrays));

// 5 - masala;
const arrNumbers = [-3, -2, 1, 5, -4, 6];

function calcMax(numb) {
  return Math.max.apply(null, numb);
}
console.log(calcMax(arrNumbers));
function calcMin(numb) {
  return Math.min.apply(null, numb);
}
console.log(calcMin(arrNumbers));

let missNumbers = [];

for (let i = calcMin(arrNumbers); i<= calcMax(arrNumbers); i++) {
  missNumbers.push(i);
}
console.log(missNumbers);
