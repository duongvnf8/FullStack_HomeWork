const nums = [3, 7, 2, 9, 12, 15, 18];
// - Lấy ra mảng mới chỉ chứa số lớn hơn hoặc bằng 10.
const bigNumber = nums.filter(function (num) {
  return num >= 10;
});
console.log("Mảng mới chỉ chứa số lớn hơn hoặc bằng 10:", bigNumber);

// - Từ mảng mới trên, tạo mảng chỉ chứa số chia hết cho 3.
const divisibleNumber = bigNumber.filter(function (num) {
  return num % 3 === 0;
});
console.log("Mảng chỉ chứa số chia hết cho 3: ", divisibleNumber);

// - Với mảng ban đầu, tạo mảng mới tăng gấp đôi nhưng chỉ giữ lại số lẻ.
const doubleOddNumbers = nums
  .map(function (num) {
    return num * 2;
  })
  .filter(function (num) {
    return num % 2 !== 0;
  });

console.log("Mảng tăng gấp đôi nhưng chỉ giữ lại số lẻ: ", doubleOddNumbers);
