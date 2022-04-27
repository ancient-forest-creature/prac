class User {
    constructor(username, email) {
        this.name = username;
        this.email = email;
        this.balance = 0;
    }

    makeDeposit(amount) {
        this.balance += amount;
    }

    makeWithdraw(amount) {
        this.balance -= amount;
    }

    displayBalance() {
        console.log(`Your account balance is ${this.balance}`);
    }

    transferMoney(amount, user) {
        this.balance -= amount;
        user.makeDeposit(amount);

    }

}

const Abe = new User("abe", "abe@fig.com");
// console.log(Abe);
const Bill = new User("Bill", "bill@email.com");
const Cindy = new User("Cindy", "cindy@email.com")

Abe.makeDeposit(100);
Abe.makeDeposit(300);
Abe.makeDeposit(400);
Abe.makeWithdraw(273);
Abe.displayBalance();

Bill.makeDeposit(134.00);
Bill.makeDeposit(300);
Bill.makeWithdraw(59.23);
Bill.makeWithdraw(602.99);
Bill.displayBalance();

Cindy.makeDeposit(14847);
Cindy.makeWithdraw(36);
Cindy.makeWithdraw(1748);
Cindy.makeWithdraw(109.75);
Cindy.displayBalance();

Cindy.transferMoney(500, Bill);
Cindy.displayBalance();
Bill.displayBalance();
