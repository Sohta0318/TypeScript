// Code goes here!
abstract class Department {
  static fiscalYear = 2020;
  // private id: string;
  // private name: string;
  protected employee: string[] = [];
  // private employee: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // console.log(Department.fiscalYear);
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }
  abstract describe(this: Department): void;
  //  describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }
  addEmployee(employee: string) {
    // this.id = 'D2'
    this.employee.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employee.length);
    console.log(this.employee);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(): void {
    console.log(`IT Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID: ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employee.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports(this: AccountingDepartment) {
    console.log(this.reports);
  }
}

const employess1 = Department.createEmployee("Max");
console.log(employess1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Max"]);

// const accounting = new Department("d1", "Accounting");
it.addEmployee("Max");
it.addEmployee("Manu");

// accounting.employee[2] = "Anne";

it.describe();
it.name = "New Name";
it.printEmployeeInformation();
console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);
accounting.addReport("Something went wrong...");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// accounting.describe();
// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
