// Viết hàm hasNegative(numbers) trả về true nếu trong mảng có ít nhất một số âm.
function hasNegative(numbers) {
  return numbers.some(function (num) {
    return num < 0;
  });
}

console.log(hasNegative([1, -2, 3, -4, 5, -6]));
