class BankingAccount {
    constructor() {
        if (this.constructor === BankingAccount) {
            throw new Error("Cannot instantiate abstract class BankingAccount");
        }
    }

    deposit(amount) {
        throw new Error("Method 'deposit()' must be implemented");
    }

    withdraw(amount) {
        throw new Error("Method 'withdraw()' must be implemented");
    }

    getBalance() {
        throw new Error("Method 'getBalance()' must be implemented");
    }
}

class SavingsAccount extends BankingAccount {
    constructor() {
        super();
        this.balance = 0;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to SavingsAccount. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from SavingsAccount. New balance: ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount or insufficient balance");
        }
    }

    getBalance() {
        return this.balance;
    }
}

class CheckingAccount extends BankingAccount {
    constructor() {
        super();
        this.balance = 0;
        this.minimumBalance = 50;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ${amount} to CheckingAccount. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive");
        }
    }

    withdraw(amount) {
        if (amount > 0 && (this.balance - amount) >= this.minimumBalance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount} from CheckingAccount. New balance: ${this.balance}`);
        } else {
            console.log(`Invalid withdrawal amount or balance would fall below minimum (${this.minimumBalance})`);
        }
    }

    getBalance() {
        return this.balance;
    }
}

// Test
function testBankAccounts() {
    console.log(" Testing SavingsAccount");
    const savings = new SavingsAccount();
    savings.deposit(1000);
    console.log(`Savings balance: ${savings.getBalance()}`);
    savings.withdraw(500);
    console.log(`Savings balance: ${savings.getBalance()}`);
    savings.withdraw(600);
    console.log(`Savings balance: ${savings.getBalance()}`);
    savings.deposit(-100);
    console.log(`Savings balance: ${savings.getBalance()}`);

    console.log("\n=== Testing CheckingAccount ===");
    const checking = new CheckingAccount();
    checking.deposit(200);
    console.log(`Checking balance: ${checking.getBalance()}`);
    checking.withdraw(100);
    console.log(`Checking balance: ${checking.getBalance()}`);
    checking.withdraw(100);
    console.log(`Checking balance: ${checking.getBalance()}`);
    checking.deposit(-50);
    console.log(`Checking balance: ${checking.getBalance()}`);

    try {
        const abstractAccount = new BankingAccount();
    } catch (error) {
        console.log("\n Testing Abstract Class");
        console.log(error.message);
    }
}

// Run the tests
testBankAccounts();