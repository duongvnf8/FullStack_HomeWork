const employees = [
  { id: 1, name: "Mai", department: "IT", salary: 1200 },
  { id: 2, name: "Nam", department: "HR", salary: 800 },
  { id: 3, name: "Hà", department: "IT", salary: 1500 },
  { id: 4, name: "Linh", department: "Marketing", salary: 900 },
  { id: 5, name: "Phúc", department: "IT", salary: 1100 },
];

// - Tính tổng lương của từng phòng ban.
const totalSalaryDepartment = (employees) => {
  return employees.reduce((acc, cur) => {
    acc[cur.department] = (acc[cur.department] || 0) + cur.salary;
    return acc;
  }, {});
};
console.log(totalSalaryDepartment(employees));

// - Tìm nhân viên có mức lương cao nhất trong mỗi phòng ban.
const searchTop = (employees) => {
  return employees.reduce((acc, cur) => {
    if (!acc[cur.department] || cur.salary > acc[cur.department].salary) {
      acc[cur.department] = cur;
    }
    return acc;
  }, {});
};
console.log(searchTop(employees));

// - Chuyển đổi dữ liệu về dạng object, trong đó key là tên phòng ban, value là mảng nhân viên trong phòng ban đó.
const groupByDept = (employees) => {
  return employees.reduce((acc, cur) => {
    acc[cur.department] = acc[cur.department] || [];
    acc[cur.department].push(cur);
    return acc;
  }, {});
};
console.log(groupByDept(employees));
