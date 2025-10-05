const scores = [
  [8, 9, 7],
  [6, 5, 7],
  [10, 9, 8],
];

// - Tính điểm trung bình của từng học sinh => [8, 6, 9].
const averages = scores.map(function (studentScores) {
  let sum = 0;
  for (let i = 0; i < studentScores.length; i++) {
    sum += studentScores[i];
  }
  return sum / studentScores.length;
});
console.log("Mảng chứa điểm của từng học sinh: ", averages);

// - Lọc ra những học sinh có điểm trung bình >= 8.
const goodStudents = averages.filter(function (avg) {
  return avg >= 8;
});
console.log("Mảng chứa học sinh có điểm trung bình >= 8: ", goodStudents);

// - Tạo mảng mới tăng tất cả điểm thêm 1 (nếu chưa vượt quá 10).
const increasedScores = scores.map(function (studentScores) {
  return studentScores.map(function (score) {
    return score < 10 ? score + 1 : score;
  });
});
console.log(
  "Mảng tăng tất cả điểm thêm 1 (điểm tối đa là 10): ",
  increasedScores
);
