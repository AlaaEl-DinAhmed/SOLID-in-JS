interface Pay {
  makePayment: (method: string) => void;
}

class CashOrder implements Pay {
  constructor() {}
  makePayment(method: string) {
    console.log(method);
  }
}

class InstallmentOrder implements Pay {
  constructor() {}
  makePayment(method: string) {
    console.log(method);
  }
}

class CreditOrder implements Pay {
  constructor() {}
  makePayment(method: string) {
    console.log(method);
  }
}

class Order {
  paymentMethod: Pay;
  constructor(paymentProcess: Pay) {
    this.paymentMethod = paymentProcess;
  }
  pay(method: string) {
    this.paymentMethod.makePayment(method);
  }
}

const cashOrder = new Order(new CashOrder());

cashOrder.pay("Credit order");

const installmentOrder = new Order(new InstallmentOrder());

installmentOrder.pay("Installment order");
