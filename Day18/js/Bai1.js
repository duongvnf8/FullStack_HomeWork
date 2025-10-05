const arr = [1, 2, 3, 4, 5, 6];
// - Tạo mảng mới chứa bình phương của từng phần tử.
const squares = arr.map(function (num) {
  return num ** 2;
});
console.log("Mảng chứa bình phương của từng phần tử: ", squares);

// - Tạo mảng mới chứa các số chẵn trong mảng.
const evenNumbers = arr.filter(function (num) {
  return num % 2 === 0;
});
console.log("Mảng chứa các số chẵn: ", evenNumbers);

// - Tạo mảng mới chứa các số bình phương nhưng chỉ lấy số lẻ.
const oddSquares = arr
  .filter(function (num) {
    return num % 2 !== 0;
  })
  .map(function (num) {
    return num ** 2;
  });

console.log("Mảng chứa các số lẻ bình phương: ", oddSquares);
