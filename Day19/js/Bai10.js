// Viết hàm hasPrime(numbers) để kiểm tra xem trong mảng có số nguyên tố hay không
function hasPrime(numbers) {
  return numbers.some(function (value) {
    if (value < 2) {
      return false;
    } else {
      for (let i = 2; i < value; i++) {
        if (value % i === 0) {
          return false;
        }
      }
      return true;
    }
  });
}
const numbers = [4, 3, 6, 5, 7];
console.log(`Trong mảng ${numbers} có số nguyên tố:`, hasPrime(numbers));
