import Company from './Company.js';
import {
  Developer,
  Designer
} from './Employee.js';

let company = new Company();
company.addEmployee(new Developer('Kevin',8000,'java'));
company.addEmployee(new Developer('Kris',20000,'php'));
company.addEmployee(new Developer('John',18000,'c++'));

let aveSalary = company.getAverageSalary('developer');
console.log(aveSalary);