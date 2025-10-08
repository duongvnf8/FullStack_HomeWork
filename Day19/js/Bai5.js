// Viết hàm findFirstOddIndex(numbers) trả về index của phần tử lẻ đầu tiên.
function findFirstOddIndex(numbers) {
  return numbers.findIndex(function (num) {
    return num % 2 !== 0;
  });
}

console.log(findFirstOddIndex([2, 3, 6, 8, 10, 11]));
console.log(findFirstOddIndex([2, 4, 6, 5, 10]));
