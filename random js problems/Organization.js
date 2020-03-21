class Organization {
    constructor(name, budget) {
        this.name = name;
        this.budget = budget;
        this.employees = [];
        this._departmentsBudget = {
            marketing: budget * 0.4,
            finance: budget * 0.25,
            production: budget * 0.35
        };
    }

    get departmentsBudget() {
        return this._departmentsBudget;
    }

    add(employeeName, department, salary) {
        if (this.departmentsBudget[department] >= salary) {
            let employee = {
                employeeName,
                department,
                salary
            };
            this.employees.push(employee);
            this._departmentsBudget[department] -= salary;
            this.budget -= salary;
            return `Welcome to the ${department} team Mr./Mrs. ${employeeName}.`;
        } else {
            return `The salary that ${department} department can offer to you Mr./Mrs. ${employeeName} is $${this.departmentsBudget[department]}.`;
        }
    }

    employeeExists(employeeName) {
        let found = this.employees.find(x => x.employeeName === employeeName);
        if (found) {
            return `Mr./Mrs. ${employeeName} is part of the ${found.department} department.`;
        } else {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        }
    }

    leaveOrganization(employeeName) {
        let foundIndex = this.employees.findIndex(x => x.employeeName === employeeName);
        if (foundIndex < 0 ) {
            return `Mr./Mrs. ${employeeName} is not working in ${this.name}.`;
        } else {
            let salary = this.employees[foundIndex].salary;
            let department = this.employees[foundIndex].department;
            this.budget += salary;
            this._departmentsBudget[department] += salary;
            this.employees.splice(foundIndex, 1);
            return `It was pleasure for ${this.name} to work with Mr./Mrs. ${employeeName}.`;
        }
    }

    status() {
        let result = `${this.name.toUpperCase()} DEPARTMENTS:`;
        let marketingEmployees = this.employees
            .filter(e => e.department === 'marketing')
            .sort((a, b) => b.salary - a.salary)
            .map(e => e.employeeName);
        let financeEmployees = this.employees
            .filter(e => e.department === 'finance')
            .sort((a, b) => b.salary - a.salary)
            .map(e => e.employeeName);
        let productionEmployees = this.employees
            .filter(e => e.department === 'production')
            .sort((a, b) => b.salary - a.salary)
            .map(e => e.employeeName);
        result += `\nMarketing | Employees: ${marketingEmployees.length}: ${marketingEmployees.join(', ')} |  Remaining Budget: ${this.departmentsBudget.marketing}`;
        result += `\nFinance | Employees: ${financeEmployees.length}: ${financeEmployees.join(', ')} |  Remaining Budget: ${this.departmentsBudget.finance}`;
        result += `\nProduction | Employees: ${productionEmployees.length}: ${productionEmployees.join(', ')} |  Remaining Budget: ${this.departmentsBudget.production}`;
        // result += `\nMarketing | Employees: ${marketingEmployees.length}${marketingEmployees.length ? ': ' + marketingEmployees.join(', ') : ''} | Remaining Budget: ${this.departmentsBudget.marketing}`;
        // result += `\nFinance | Employees: ${financeEmployees.length}${financeEmployees.length ? ': ' + financeEmployees.join(', ') : ''} | Remaining Budget: ${this.departmentsBudget.finance}`;
        // result += `\nProduction | Employees: ${productionEmployees.length}${productionEmployees.length ? ': ' + productionEmployees.join(', ') : ''} | Remaining Budget: ${this.departmentsBudget.production}`;
        console.log(result);
        // return result;
    }
}


let organization = new Organization('SoftUni', 25000);
console.log(organization.add('Peter', 'marketing', 1200));
console.log(organization.add('Robert', 'production', 2000));
console.log(organization.add('Robert2', 'production', 3000));
console.log(organization.add('Philip', 'production', 2500));
console.log(organization.leaveOrganization('Peter'));
organization.status();
