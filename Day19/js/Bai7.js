// Viết hàm sum(numbers) để tính tổng tất cả các phần tử trong mảng.
function sum(numbers) {
  return numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);
}

console.log(sum([1, 2, 3, 4, 5]));
