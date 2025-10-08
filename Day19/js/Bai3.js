// Viết hàm findDivisibleBy5(numbers) trả về phần tử đầu tiên chia hết cho 5.
function findDivisibleBy5(numbers) {
  return numbers.find(function (num) {
    return num % 5 === 0;
  });
}

console.log(findDivisibleBy5([2, 7, 10, 15, 20]));
console.log(findDivisibleBy5([1, 2, 3, 4]));
