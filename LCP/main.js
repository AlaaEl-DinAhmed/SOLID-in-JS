var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return "Employee salary is " + this.salary + ".";
    };
    return Employee;
}());
var EmployeeWithBonus = /** @class */ (function (_super) {
    __extends(EmployeeWithBonus, _super);
    function EmployeeWithBonus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmployeeWithBonus.prototype.calculateBonus = function () {
        var bous_amount = this.salary * 0.2;
        console.log("Bonus amount is:", bous_amount);
    };
    return EmployeeWithBonus;
}(Employee));
var Permenant = /** @class */ (function (_super) {
    __extends(Permenant, _super);
    function Permenant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Permenant;
}(EmployeeWithBonus));
var Contract = /** @class */ (function (_super) {
    __extends(Contract, _super);
    function Contract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Contract;
}(Employee));
var per = new Permenant(1000);
console.log(per.calculateBonus());
