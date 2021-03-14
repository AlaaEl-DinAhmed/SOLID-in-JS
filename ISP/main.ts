interface ICash {
  orderByCash: () => void;
}

interface IInstallment {
  orderByInstallment: () => void;
}

interface ICredit {
  orderByCredit: () => void;
}

interface IOnline {
  orderByOnline: () => void;
}

interface IOrder extends ICash, IInstallment, ICredit, IOnline {}
class Orders implements IOrder {
  orderByCash: () => void;
  orderByInstallment: () => void;
  orderByCredit: () => void;
  orderByOnline: () => void;
}

class CashOrder implements ICash {
  orderByCash: () => void;
}
