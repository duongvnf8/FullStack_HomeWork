const words = ["javascript", "php", "css", "html", "python", "java"];
// - Lọc ra các từ có độ dài >= 5.
const longWords = words.filter(function (word) {
  return word.length >= 5;
});
console.log("Mảng chứa các từ có độ dài >= 5: ", longWords);

// - Tạo mảng mới viết hoa toàn bộ.
const upperCaseWords = words.map(function (word) {
  return word.toUpperCase();
});
console.log("Mảng viết hoa toàn bộ: ", upperCaseWords);

// - Tạo mảng mới viết ngược từng chuỗi (tpircsavaj, avaj...)
const reversedWords = words.map(function (word) {
  return word.split("").reverse().join("");
});

console.log("Mảng mới viết ngược từng chuỗi: ", reversedWords);
