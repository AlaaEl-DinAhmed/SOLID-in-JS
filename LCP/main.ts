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
    const bous_amount = this.salary * 0.2;
    console.log("Bonus amount is:", bous_amount);
  }
}

class Permenant extends EmployeeWithBonus {
  constructor(salary: number) {
    super(salary);
  }
}

class Contract extends Employee {
  constructor(salary: number) {
    super(salary);
  }
}

const per = new Permenant(1000);
console.log(per.calculateBonus());
