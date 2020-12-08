function people() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error('Canot instatiate directly.');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
            let task = this.tasks.shift();
            console.log(`${this.name} ${task}`);
            this.tasks.push(task);
        }

        collectSalary() {
            console.log(
                `${this.name} received ${this.getSalary()} this month.`
            );
        }

        getSalary() {
            return this.salary;
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a simple task.');
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('is working on a complicated task.');
            this.tasks.push('is taking time off work.');
            this.tasks.push('is supervising junior workers.');
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push('scheduled a meeting.');
            this.tasks.push('is preparing a quarterly report.');
            this.dividend = 0;
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}

function solution2() {
    class Employee {
        constructor(name, age) {
            if (new.target === Employee) {
                throw new Error(
                    'Cannot make instance of abstract class Employee.'
                );
            }

            [this.name, this.age, this.salary, this.tasks] = [name, age, 0, []];
        }

        work() {
            let current = this.tasks.shift();
            console.log(`${this.name} ${current}`);
            this.tasks.push(current);
        }

        getSalary() {
            return this.salary;
        }

        collectSalary = () =>
            console.log(
                `${this.name} received ${this.getSalary()} this month.`
            );
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = ['is working on a simple task.'];
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks = [
                'is working on a complicated task.',
                'is taking time off work.',
                'is supervising junior workers.',
            ];
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks = [
                'scheduled a meeting.',
                'is preparing a quarterly report.',
            ];
        }

        getSalary() {
            return super.getSalary() + this.dividend;
        }
    }

    return { Employee, Junior, Senior, Manager };
}
