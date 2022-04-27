class BankAccount {
    constructor(intRate = .012, balance = 0) {
        this.intRate = intRate;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this;
    }

    withdraw(amount) {
        this.balance -= amount;
        return this;
    }

    displayAccountInfo() {
        console.log(`Your account balance is: ${this.balance}`)
        console.log(`Your interest rate is: ${this.intRate}`)
        return this;
    }

    yieldInterest() {
        this.balance = this.balance + (this.balance * this.intRate);
        return this;
    }
}

const one = new BankAccount(.03, 450);

one.deposit(50).deposit(75).deposit(367).withdraw(698).yieldInterest().displayAccountInfo();

const two = new BankAccount();

two.deposit(699).deposit(369).withdraw(23).withdraw(42).withdraw(195).withdraw(777).yieldInterest().displayAccountInfo();