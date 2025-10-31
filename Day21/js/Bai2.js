// Viết hàm isAllEven(numbers) để kiểm tra tất cả các phần tử có phải là số chẵn.
function isAllEven(numbers) {
  return numbers.every(function (num) {
    return num % 2 === 0;
  });
}

console.log(isAllEven([2, 4, 6, 8]));
console.log(isAllEven([1, 2, 3]));
console.log(isAllEven([2, 3, 4, 6, 8]));
