// Viết hàm findLastGreaterThan50(numbers) trả về index của phần tử cuối cùng > 50.
function findLastGreaterThan50(numbers) {
  return numbers.findLastIndex(function (num) {
    return num > 50;
  });
}

console.log(findLastGreaterThan50([10, 55, 30, 60, 20, 70]));
