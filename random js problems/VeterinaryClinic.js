class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
        this.allPetsForProcedures = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.capacity === this.allPetsForProcedures) {
            throw new Error('Sorry, we are not able to accept more patients!');
        }
        kind = kind.toLowerCase();
        const currentClient = this.clients.filter(
            (c) => c.ownerName === ownerName
        )[0];
        if (currentClient !== undefined) {
            if (
                currentClient.hasOwnProperty(petName) &&
                currentClient.petName.kind === kind &&
                currentClient.petName.procedures.length > 0
            ) {
                throw new Error(
                    `This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentClient.kind.petName.procedures.join(
                        ', '
                    )}.`
                );
            }
            currentClient[petName] = {
                kind,
                procedures,
            };
        } else {
            const client = {
                ownerName,
                [petName]: { kind, procedures },
            };
            this.clients.push(client);
        }
        this.allPetsForProcedures++;
        return `Welcome ${petName}!`;
    }

    onLeaving(owner, petName) {
        const currentClient = this.clients.filter(
            (c) => c.ownerName === owner
        )[0];
        if (currentClient === undefined) {
            throw new Error('Sorry, there is no such client!');
        }
        if (
            currentClient[petName] === undefined ||
            currentClient[petName].procedures.length === 0
        ) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        this.totalProfit += 500 * currentClient[petName].procedures.length;
        this.allPetsForProcedures--;
        currentClient[petName].procedures = [];
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        const percentageFull =
            (this.allPetsForProcedures / this.capacity) * 100;
        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName));
        let output = `${this.clinicName} is ${Math.floor(
            percentageFull
        )}% busy today!`;
        output += `\nTotal profit: ${this.totalProfit.toFixed(2)}$`;
        this.clients.forEach((client) => {
            output += `\n${client.ownerName} with:`;
            Object.keys(client)
                .sort((a, b) => a.localeCompare(b))
                .forEach((key) => {
                    if (client[key].hasOwnProperty('procedures')) {
                        output += `\n---${key} - a ${
                            client[key].kind
                        } that needs: ${client[key].procedures.join(', ')}`;
                    }
                });
        });
        return output;
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(
    clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB'])
);
console.log(
    clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456'])
);
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());

class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentCapacity = 0;
        this.totalProfit = 0;
        this.clinic = {};
    }

    newCustomer(ownerName, petName, kind, procedures) {
        let isValid = false;
        if (this.currentCapacity === this.capacity) {
            throw new Error(`Sorry, we are not able to accept more patients!`);
        }
        if (!this.clinic.hasOwnProperty(ownerName)) {
            this.currentCapacity++;
            this.clients.push(ownerName);
            this.clinic[ownerName] = [];
            this.clinic[ownerName].push({
                name: petName,
                kind: kind,
                procedures: Array.from(procedures),
            });
        } else {
            this.clinic[ownerName].forEach((obj) => {
                if (obj.name === petName && obj.procedures.length > 0) {
                    isValid = true;
                    throw new Error(
                        `This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${obj.procedures.join(
                            ', '
                        )}.`
                    );
                }
            });

            if (isValid === false) {
                this.currentCapacity++;
                this.clinic[ownerName].push({
                    name: petName,
                    kind: kind,
                    procedures: Array.from(procedures),
                });
            }
        }
        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        if (!this.clients.includes(ownerName)) {
            throw new Error(`Sorry, there is no such client!`);
        }
        let petExist = false;
        for (let i = 0; i < this.clinic[ownerName].length; i++) {
            if (this.clinic[ownerName][i].name === petName) {
                petExist = true;
                break;
            }
        }
        let proceduresExist = true;
        for (let i = 0; i < this.clinic[ownerName].length; i++) {
            if (
                this.clinic[ownerName][i].name === petName &&
                this.clinic[ownerName][i].procedures.length === 0
            ) {
                proceduresExist = false;
                break;
            }
        }
        if (petExist === false || proceduresExist === false) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        } else {
            this.clinic[ownerName].forEach((obj) => {
                if (obj.name === petName) {
                    this.totalProfit += obj.procedures.length * 500;
                    this.currentCapacity--;
                    obj.procedures = [];
                }
            });
            return `Goodbye ${petName}. Stay safe!`;
        }
    }

    toString() {
        let result = [];
        let percentage = Math.floor(
            (this.currentCapacity / this.capacity) * 100
        );
        let percentageStr = `${this.clinicName} is ${percentage}% busy today!`;
        let profit = this.totalProfit.toFixed(2);
        let profitStr = `Total profit: ${profit}$`;
        result.push(percentageStr);
        result.push(profitStr);
        let sorted = Object.entries(this.clinic).sort(
            (a, b) =>
                a[0].localeCompare(b[0]) || a[1].name.localeCompare(b[1]).name
        );
        let str = '';
        for (const s of sorted) {
            str += `${s[0]} with:\n`;
            for (const obj of s[1].sort((a, b) =>
                a.name.localeCompare(b.name)
            )) {
                str += `---${
                    obj.name
                } - a ${obj.kind.toLowerCase()} that needs: ${obj.procedures.join(
                    ', '
                )}\n`;
            }
        }
        result.push(str);
        return result.join('\n').trim();
    }
}
