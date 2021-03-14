var CashOrder = /** @class */ (function () {
    function CashOrder() {
    }
    CashOrder.prototype.makePayment = function (method) {
        console.log(method);
    };
    return CashOrder;
}());
var InstallmentOrder = /** @class */ (function () {
    function InstallmentOrder() {
    }
    InstallmentOrder.prototype.makePayment = function (method) {
        console.log(method);
    };
    return InstallmentOrder;
}());
var CreditOrder = /** @class */ (function () {
    function CreditOrder() {
    }
    CreditOrder.prototype.makePayment = function (method) {
        console.log(method);
    };
    return CreditOrder;
}());
var Order = /** @class */ (function () {
    function Order(paymentProcess) {
        this.paymentMethod = paymentProcess;
    }
    Order.prototype.pay = function (method) {
        this.paymentMethod.makePayment(method);
    };
    return Order;
}());
var cashOrder = new Order(new CashOrder());
cashOrder.pay("Credit order");
var installmentOrder = new Order(new InstallmentOrder());
installmentOrder.pay("Installment order");
