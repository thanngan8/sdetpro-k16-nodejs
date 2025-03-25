const readline = require('readline-sync');

//DB
const account1 = {
    accountName: 'Teo',
    accountNumber: '123456789',
    routingNumber: '123',
    balance: 20000
};

const account2 = JSON.parse(JSON.stringify(account1));
account2.accountName = 'Ti';
account2.accountNumber = '987654321';

const accounts = [account1, account2];

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
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { accountName, balance } = foundAccount;
                    console.log(`accountName: ${accountName}, balance: ${balance}`);
                }
                break;
            case 2:
                updateBalance();
                break;
            case 0:
                isInteracting = false;
                break;
            default:
                console.log("Wrong option!! \n");
        }
    }
    console.log('See you next time');
}

// Support functions
function printTheAppMenu() {
    console.log(`
        === Banking application ===
        1. Find an account
        2. Update balance
        0. Exit the program.
        `);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findAccount() {
    let foundAccount = {};
    const inputAccountNumber = readline.question('Please enter account number: ');
    for (const account of accounts) {
        if (account.accountNumber === inputAccountNumber) {
            foundAccount = account;
            break;
        }
    }
    return foundAccount;
}

function updateBalance() {
    const MAX_ALLOWED_ATTEMP = 3;
    let attemps = 0;
    do {
        const foundAccount = findAccount();
        const isNotFound = findAccount.accountNumber === undefined;
        if (isNotFound) {
            console.log(`Attemp time: ${attemps + 1}`);
            attemps++;
        } else {
            // Logic to update balance and exis the function
            const {balance} = foundAccount;
            console.log(`Your balance is: ${balance}`);
            const expectedWithdrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWithdrawMoney > balance) {
                console.log('Insufficient balance!');
            } else {
                console.log('Succeed!');
                foundAccount.balance = balance - expectedWithdrawMoney;
                attemps = MAX_ALLOWED_ATTEMP; 
            }
        }
    }
    while (attemps < MAX_ALLOWED_ATTEMP)
}
