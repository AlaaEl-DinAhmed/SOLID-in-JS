class Employee {
  salary: number;
  constructor(salary: number) {
    this.salary = salary;
  }
  getSalary() {
    return `Employee salary is ${this.salary}.`;
  }
}

class EmployeeWithBonus extends Employee {
  calculateBonus() {
    const bonus = this.salary * 0.2;
    console.log("Bonus amount is:", bonus);
  }
}

class Permanent extends EmployeeWithBonus {
  constructor(salary: number) {
    super(salary);
  }
}

class Contract extends Employee {
  constructor(salary: number) {
    super(salary);
  }
}

const per = new Permanent(1000);
console.log(per.calculateBonus());
