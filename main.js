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
var Developer = /** @class */ (function () {
    function Developer(fname, lname, age, job) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.job = job;
    }
    return Developer;
}());
var FrontendDeveloper = /** @class */ (function (_super) {
    __extends(FrontendDeveloper, _super);
    function FrontendDeveloper(fname, lname, age, job) {
        return _super.call(this, fname, lname, age, job) || this;
    }
    FrontendDeveloper.prototype.getFullInfo = function () {
        return "This is " + this.fname + " " + this.lname + ". A " + this.job + ", and he is " + this.age + " years old.";
    };
    return FrontendDeveloper;
}(Developer));
var BackendDeveloper = /** @class */ (function (_super) {
    __extends(BackendDeveloper, _super);
    function BackendDeveloper(fname, lname, age, job) {
        return _super.call(this, fname, lname, age, job) || this;
    }
    BackendDeveloper.prototype.getFullInfo = function () {
        return "This is " + this.fname + " " + this.lname + ". A " + this.job + ", and he is " + this.age + " years old.";
    };
    return BackendDeveloper;
}(Developer));
var frontendDev = new FrontendDeveloper("Alaa", "Ahmed", 29, "Frontend Developer");
var backendDev = new BackendDeveloper("Mohamed", "Hassan", 30, "Backend Developer");
console.log(frontendDev.getFullInfo());
console.log(backendDev.getFullInfo());
