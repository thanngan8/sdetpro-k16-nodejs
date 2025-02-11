const readline = require('readline-sync');

// Create the initial bank account object
const account1 = {
    accountName: 'User 1',
    accountNumber: '123456789',
    routingNumber: '123',
    balance: 20000
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'User 2';
account2.accountNumber = '987654321';

const bankAccounts = [account1, account2];

//Program interface
bankApp();

//Support functions
function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu(); 
        const userOption = getUserOption();

        switch (userOption) {
            case 1:
                findAccountAndDisplay();
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false; // Exit the program
                break;
            default:
                console.log("Wrong option!! \n");
        }
    }
    console.log('See you next time!');
}

// Print the application menu
function printTheAppMenu() {
    console.log(`
        === Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program.
        `);
}

// Get user input and validate it
function getUserOption() {
    const input = readline.question('Please select an option: ');
    const num = Number(input); // Convert to number

    if (isNaN(num) || num < 0 || num > 2) {
        console.log("Invalid input. Please enter a number between 0 and 2.");
        return -1;
    }
    return num;
}


// Ftion to find an account
function findAccount() {
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of bankAccounts) {
        if (account.accountNumber === inputAccountNumber) {
            return account;
        }
    }
    return null;
}

// Find an account and display its information
function findAccountAndDisplay() {
    const foundAccount = findAccount();
    if (foundAccount) {
        const { accountNumber, balance } = foundAccount;
        console.log(`Account Number: ${accountNumber}, Balance: ${balance}`);
    } else {
        console.log("Account not found.");
    }
}

// Update the account balance
function updateBalance() {
    const MAX_ALLOWED_ATTEMPTS = 3; // Maximum attempts for finding the account
    let attempts = 0;

    while (attempts < MAX_ALLOWED_ATTEMPTS) {
        const foundAccount = findAccount();

        if (foundAccount === null) { 
            console.log(`Attempt time: ${attempts + 1}`);
            attempts++;
            continue;
        }

        const { balance } = foundAccount;
        console.log(`Your balance is: ${balance}`);

        const inputWithdrawMoney = readline.question('Please input withdraw amount: ');
        const expectedWithdrawMoney = Number(inputWithdrawMoney);

        if (isNaN(expectedWithdrawMoney) || expectedWithdrawMoney <= 0) {
            console.log("Invalid withdrawal amount. Please enter a positive number.");
            continue; 
        }

        if (expectedWithdrawMoney > balance) {
            console.log('Insufficient balance!');
        } else {
            console.log('Withdrawal successful!');
            foundAccount.balance = balance - expectedWithdrawMoney;
            break;
        }
    }

    if (attempts === MAX_ALLOWED_ATTEMPTS) {
        console.log("Too many incorrect attempts. Please try again later.");
    }
}