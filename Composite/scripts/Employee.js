class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  getRole() {
    return this.role;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
}

export class Developer extends Employee {
  constructor(name, salary, language) {
    super(name, salary);
    this.role = 'developer';
    this.language = language;
  }
  getLanguage() {
    return this.language;
  }
  develop() {
    console.log(`${this.name} is coding in ${this.language}`);
  }
}

export class Designer extends Employee {
  constructor(name, salary, platform) {
    super(name, salary);
    this.role = 'designer';
    this.platform = platform;
  }
  getPlatform() {
    return this.platform;
  }
  design() {
    console.log(`${this.name} is designing with ${this.platform}`);
  }
}