const numbers = [1, 3, 5, 7, 9, 11];
const newNumber = 8;

let result = [];
let inserted = false;

for (let i = 0; i < numbers.length; i++) {
  if (!inserted && newNumber < numbers[i]) {
    result[result.length] = newNumber;
    inserted = true;
  }
  result[result.length] = numbers[i];
}

if (!inserted) {
  result[result.length] = newNumber;
}

console.log(result);
