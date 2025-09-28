let number = 6;
let primeNumber = true;

if (number < 2) {
  console.log(`Số ${number} không phải số nguyên tố`);
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      primeNumber = false;
      break;
    }
  }

  if (primeNumber === true) {
    console.log(`Số ${number} là số nguyên tố`);
  } else {
    console.log(`Số ${number} không phải số nguyên tố`);
  }
}
