const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

// - Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.
const groupProject = (employees) => {
  return employees.reduce((acc, cur) => {
    cur.projects.forEach((item) => {
      acc[item] = acc[item] || [];
      acc[item].push(cur.name);
    });
    return acc;
  }, {});
};
console.log(groupProject(employees));

// - Tìm dự án có nhiều nhân viên tham gia nhất.
const maxProject = (employees) => {
  return Object.entries(groupProject(employees)).reduce(
    (acc, cur) => {
      const projectName = cur[0];
      const list = cur[1];
      if (list.length > acc.count) {
        return {
          project: projectName,
          count: list.length,
        };
      }
      return acc;
    },
    {
      count: 0,
    }
  );
};
console.log(maxProject(employees));

// - Chuyển đổi dữ liệu về dạng object, trong đó key là projectId, value là danh sách nhân viên thuộc dự án đó.
function convertProject(employees) {
  const grouped = groupProject(employees);
  const result = {};
  for (const key in grouped) {
    result[key] = grouped[key];
  }
  return result;
}
console.log(convertProject(employees));
