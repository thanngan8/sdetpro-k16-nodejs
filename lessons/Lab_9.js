class Employee {
    constructor(name) {
        this.name = name;
    }
    
    salary() {
        return 0;
    }
}

class FullTimeEmployee extends Employee {
    salary() {
        return 50000;
    }
}

class ContractEmployee extends Employee {
    salary() {
        return 40000;
    }
}

function calculateTotalSalary(employees) {
    let totalSalary = 0;
    let highestSalaryEmployee = employees[0];
    let lowestSalaryEmployee = employees[0];

    for (let employee of employees) {
        const employeeSalary = employee.salary();
        totalSalary += employeeSalary;

        if (employeeSalary > highestSalaryEmployee.salary()) {
            highestSalaryEmployee = employee;
        }

        if (employeeSalary < lowestSalaryEmployee.salary()) {
            lowestSalaryEmployee = employee;
        }
    }

    console.log(`Total salary: ${totalSalary}`);
    console.log(`Highest paid employee: ${highestSalaryEmployee.name} : ${highestSalaryEmployee.salary()}`);
    console.log(`Lowest paid employee: ${lowestSalaryEmployee.name} : ${lowestSalaryEmployee.salary()}`);
}

const employees = [
    new FullTimeEmployee("Vàng"),
    new FullTimeEmployee("Kim Cương"),
    new FullTimeEmployee("Phú Quý"),
    new ContractEmployee("Sa Hoa"),
    new ContractEmployee("Hào Quang")
];

calculateTotalSalary(employees);