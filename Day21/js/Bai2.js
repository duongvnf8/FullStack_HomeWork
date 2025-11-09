const students = [
  { id: 1, name: "An", scores: { math: 8, english: 7, science: 9 } },
  { id: 2, name: "Bình", scores: { math: 6, english: 8, science: 7 } },
  { id: 3, name: "Châu", scores: { math: 9, english: 6, science: 8 } },
];
// - Tính điểm trung bình của từng học viên.
const avgScore = (students) => {
  return students.map((student) => {
    const scores = Object.values(student.scores);
    const avg =
      scores.reduce((acc, cur) => {
        return acc + cur;
      }, 0) / scores.length;
    return Object.assign({}, student, { avg });
  });
};
console.log(avgScore(students));

// - Tìm học viên có điểm trung bình cao nhất.
const topStd = (students) => {
  return avgScore(students).reduce((acc, cur) => {
    return cur.avg > acc.avg ? cur : acc;
  });
};
console.log(topStd(students));

// - Sắp xếp danh sách học viên theo điểm trung bình giảm dần.
const sortStd = (students) => {
  return avgScore(students).sort((a, b) => {
    return b.avg - a.avg;
  });
};
console.log(sortStd(students));
