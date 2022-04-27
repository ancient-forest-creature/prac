import { BankAccount } from "./BankAcct.js";

class User {
    constructor(username, email) {
        this.name = username;
        this.email = email;
        this.account = new BankAccount(.02);
    }

    makeDeposit(amount) {
        this.account.balance += amount;
        return this;
    }

    makeWithdraw(amount) {
        this.account.balance -= amount;
        return this;
    }

    displayBalance() {
        console.log(`Your account balance is ${this.account.balance}`);
        return this;
    }

    transferMoney(amount, user) {
        this.account.balance -= amount;
        user.makeDeposit(amount);
        return this;
    }

}

const Dave = new User("Dave", "dave@nothere.com");
Dave.account.deposit(500).withdraw(129).displayAccountInfo();

const Abe = new User("abe", "abe@fig.com");
// console.log(Abe);
const Bill = new User("Bill", "bill@email.com");
const Cindy = new User("Cindy", "cindy@email.com")

Abe.makeDeposit(100).makeDeposit(300).makeDeposit(400).makeWithdraw(273).displayBalance();

Bill.makeDeposit(134.00).makeDeposit(300).makeWithdraw(59.23).makeWithdraw(602.99).displayBalance();

Cindy.makeDeposit(14847).makeWithdraw(36).makeWithdraw(1748).makeWithdraw(109.75).displayBalance();

Cindy.transferMoney(500, Bill);
Cindy.displayBalance();
Bill.displayBalance();
