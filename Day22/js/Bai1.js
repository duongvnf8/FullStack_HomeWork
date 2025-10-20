class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getInfo() {
    return [this.name, this.age, this.salary];
  }
}

class Developer extends Employee {
  constructor(name, age, salary, programmingLanguage) {
    super(name, age, salary);
    this.programmingLanguage = programmingLanguage;
  }
}

class Manager extends Employee {
  constructor(name, age, salary) {
    super(name, age, salary);
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getInfo() {
    console.log(`${this.name} - Tuổi: ${this.age} - Lương: ${this.salary}`);
    console.log("Quản lý nhân viên:");
    for (let employee of this.employees) {
      console.log(
        ` - ${employee.name}, Ngôn ngữ: ${employee.programmingLanguage}`
      );
    }
  }
}

const dev1 = new Developer("John", 28, 5000, "JavaScript");
const dev2 = new Developer("Jane", 30, 5500, "Python");
const manager = new Manager("Alice", 35, 8000);

manager.addEmployee(dev1);
manager.addEmployee(dev2);
manager.getInfo();
