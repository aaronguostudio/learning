// a class example from ts to js

class BankAccount1 {
  balance = 0
  deposite (credit: number) {
    this.balance += credit
    return this.balance
  }
}

var BankAccount2 = (function () {
  function BankAccount2 () {
    this.balance = 0
  }

  BankAccount2.prototype.deposite = function (credit) {
    this.balance += credit
    return this.balance
  }

  return BankAccount2
})()

// class with constuctor
class BankAccount3 {
  balance = 0
  constructor (initially: number) {
    this.balance = initially
  }

  deposite(credit: number): number {
    this.balance += credit
    return this.balance
  }
}

// shortcut
class BankAccount4 {
  constructor (public balance: number) {}
  deposite(credit: number): number {
    this.balance += credit
    return this.balance
  }
}
