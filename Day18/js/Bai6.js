const myArr = [
  ["hello", "world"],
  ["javascript", "php"],
  ["css", "html"],
];

// - Tạo mảng mới viết hoa tất cả từ.
const upperWords = myArr.map(function (row) {
  return row.map(function (word) {
    return word.toUpperCase();
  });
});
console.log("Mảng viết hoa tất cả các từ: ", upperWords);

// - Lọc ra các từ có độ dài > 4.
const longWords = myArr.map(function (row) {
  return row.filter(function (word) {
    return word.length > 4;
  });
});
console.log("Mảng chứa ccasc từ có độ dài > 4: ", longWords);

// - Ghép tất cả thành 1 mảng 1 chiều.
const oneDimension = [];
for (let i = 0; i < myArr.length; i++) {
  for (let j = 0; j < myArr[i].length; j++) {
    oneDimension.push(myArr[i][j]);
  }
}
console.log("Mảng ghép tất cả thành mảng 1 chiều: ", oneDimension);
