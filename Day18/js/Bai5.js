const myArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//  - Tạo mảng chứa tổng từng hàng => [6, 15, 24]
const rowSums = myArr.map(function (row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum;
});
console.log("Mảng chứa tổng từng hàng: ", rowSums);

// - Tạo mảng chứa tổng từng cột => [12, 15, 18]
const colSums = [];
for (let i = 0; i < myArr[0].length; i++) {
  let sum = 0;
  for (let j = 0; j < myArr.length; j++) {
    sum += myArr[j][i];
  }
  colSums.push(sum);
}
console.log("Mảng chứa tổng từng cột: ", colSums);

// - Lọc ra các hàng có tổng > 10.
const rowsGreaterThan10 = myArr.filter(function (row) {
  let sum = 0;
  for (let i = 0; i < row.length; i++) {
    sum += row[i];
  }
  return sum > 10;
});
console.log("Mảng chứa các hàng có tổng > 10: ", rowsGreaterThan10);
