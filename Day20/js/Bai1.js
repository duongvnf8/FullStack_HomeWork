const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

// In ra tên của tất cả người dùng
console.log("Danh sách tên:");
users.forEach(function (user) {
  console.log(user.name);
});

// Tìm người có tuổi lớn nhất
const oldestUser = users.reduce(function (max, user) {
  return user.age > max.age ? user : max;
});

console.log("Người có tuổi lớn nhất:", oldestUser.name, "-", oldestUser.age);
// Tính tuổi trung bình của tất cả người dùng.
const averageAge =
  users.reduce(function (total, user) {
    return total + user.age;
  }, 0) / users.length;

console.log("Tuổi trung bình:", averageAge);
