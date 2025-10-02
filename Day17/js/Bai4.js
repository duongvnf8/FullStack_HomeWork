const numbers = [5, 2, 1, 9, 8, 0];

let max, secondMax;

if (numbers[0] > numbers[1]) {
  max = numbers[0];
  secondMax = numbers[1];
} else {
  max = numbers[1];
  secondMax = numbers[0];
}

for (let i = 2; i < numbers.length; i++) {
  let result = numbers[i];
  if (result > max) {
    secondMax = max;
    max = result;
  } else if (result > secondMax && result < max) {
    secondMax = result;
  }
}

if (max === secondMax) {
  console.log("Không có số lớn thứ hai");
} else {
  console.log(`Số lớn thứ hai là ${secondMax} `);
}
