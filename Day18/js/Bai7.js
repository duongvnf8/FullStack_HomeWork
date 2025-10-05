const myArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

// - Lấy ra các phần tử trên đường chéo chính => [2, 10, 18].
const mainDiagonal = [];
for (let i = 0; i < myArr.length; i++) {
  mainDiagonal.push(myArr[i][i]);
}
console.log("Các phần tử trên đường chéo chính: ", mainDiagonal);

// - Lấy ra các phần tử trên đường chéo phụ => [6, 10, 14].
const secondaryDiagonal = [];
for (let i = 0; i < myArr.length; i++) {
  secondaryDiagonal.push(myArr[i][myArr.length - 1 - i]);
}
console.log("Các phần tử trên đường chéo phụ: ", secondaryDiagonal);

// - Tính tổng của đường chéo chính và phụ.
let sumMain = 0;
for (let i = 0; i < mainDiagonal.length; i++) {
  sumMain += mainDiagonal[i];
}

let sumSub = 0;
for (let i = 0; i < secondaryDiagonal.length; i++) {
  sumSub += secondaryDiagonal[i];
}
console.log("Tổng đường chéo chính:", sumMain);
console.log("Tổng đường chéo phụ:", sumSub);
console.log("Tổng của đường chéo chính và phụ: ", sumMain + sumSub);
