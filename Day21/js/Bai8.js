// Viết hàm multiplyAll(numbers) để tính tích của các phần tử trong mảng.
function multiplyAll(numbers) {
  return numbers.reduce(function (acc, num) {
    return acc * num;
  }, 1);
}

console.log(multiplyAll([1, 2, 3, 4]));
