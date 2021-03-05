abstract class Developer {
  fname: string;
  lname: string;
  age: number;
  job: string;
  constructor(fname: string, lname: string, age: number, job: string) {
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.job = job;
  }

  abstract getFullInfo(): string;
}

class FrontendDeveloper extends Developer {
  constructor(fname: string, lname: string, age: number, job: string) {
    super(fname, lname, age, job);
  }
  getFullInfo() {
    return `This is ${this.fname} ${this.lname}. A ${this.job}, and he is ${this.age} years old.`;
  }
}

class BackendDeveloper extends Developer {
  constructor(fname: string, lname: string, age: number, job: string) {
    super(fname, lname, age, job);
  }
  getFullInfo() {
    return `This is ${this.fname} ${this.lname}. A ${this.job}, and he is ${this.age} years old.`;
  }
}

const frontendDev = new FrontendDeveloper(
  "Alaa",
  "Ahmed",
  29,
  "Frontend Developer"
);

const backendDev = new BackendDeveloper(
  "Mohamed",
  "Hassan",
  30,
  "Backend Developer"
);
console.log(frontendDev.getFullInfo());
console.log(backendDev.getFullInfo());
