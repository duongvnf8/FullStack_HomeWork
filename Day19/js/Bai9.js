// Viết hàm longestStringLength(strings) để trả về độ dài của chuỗi dài nhất trong mảng.
function longestStringLength(strings) {
  return strings.reduce(function (max, str) {
    return str.length > max ? str.length : max;
  }, 0);
}

console.log(longestStringLength(["Học", "Javascript", "Không", "Dễ"]));
