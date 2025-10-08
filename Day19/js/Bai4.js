// Viết hàm findLastNegative(numbers) trả về phần tử âm cuối cùng trong mảng.
function findLastNegative(numbers) {
  return numbers.findLast(function (num) {
    return num < 0;
  });
}

console.log(findLastNegative([1, -2, 3, -4, 5, -6]));
console.log(findLastNegative([1, -2, 3, -4, 5]));
