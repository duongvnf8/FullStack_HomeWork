const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

// Tính điểm trung bình của từng học sinh.
const studentsWithAverage = students.map(function (student) {
  const total = student.scores.reduce(function (sum, score) {
    return sum + score;
  }, 0);
  const avg = total / student.scores.length;
  return { ...student, average: avg };
});
console.log("Danh sách có điểm TB:", studentsWithAverage);

// Trả về danh sách học sinh đạt loại giỏi (điểm TB >= 8).
const goodStudents = studentsWithAverage.filter(function (student) {
  return student.average >= 8;
});
console.log("Học sinh giỏi:", goodStudents);

// Sắp xếp học sinh theo điểm trung bình giảm dần.
const sortedStudents = studentsWithAverage.sort(function (a, b) {
  return b.average - a.average;
});
console.log("Sắp xếp theo điểm TB giảm dần:", sortedStudents);
