const names = ["   hoang ", "AN", "  f8   ", "Education"];

// - Tạo mảng mới chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ.
const cleanedNames = names.map(function (name) {
  return name.trim().toLowerCase();
});
console.log(
  `Mảng chứa các phần tử đã được xoá khoảng trắng thừa và viết thường toàn bộ: ${cleanedNames}`
);

// - Tạo mảng mới viết chữ cái đầu hoa (Hoang, An, F8, Education)
const firstNames = cleanedNames.map(function (name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(`Mảng viết chữ cái đầu hoa: ${firstNames}`);
