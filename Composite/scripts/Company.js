export default class Company {
  constructor() {
    this.employees = [];
  }
  addEmployee(employee) {
    this.employees.push(employee);
  }
  getAverageSalary(role) {
    let roles = this.employees.map((employee) => {
      if (employee.getRole() === role) {
        return employee;
      }
    });
    let averageSalary = 0;
    roles.forEach((role) => {
      averageSalary += role.salary;
    });
    averageSalary = parseInt(averageSalary / roles.length);
    return averageSalary;
  }
}