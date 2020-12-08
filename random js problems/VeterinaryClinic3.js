class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = {};
        this.totalProfit = 0;
        this.pets = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if (this.pets === this.capacity) {
            throw new Error('Sorry, we are not able to accept more patients!');
        } else {
            if (!this.clients.hasOwnProperty(ownerName)) {
                this.clients[ownerName] = {};
            }
            if (!this.clients[ownerName].hasOwnProperty(petName)) {
                this.clients[ownerName][petName] = {
                    kind: kind,
                    procedures: []
                };
            }
            if (this.clients[ownerName][petName].procedures.length > 0) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${this.clients[ownerName][petName].procedures.join(', ')}.`);
            }
            this.pets++;
            this.clients[ownerName][petName].procedures = procedures.slice();
            return `Welcome ${petName}!`;
        }
    }

    onLeaving(ownerName, petName) {
        if (!this.clients.hasOwnProperty(ownerName)) {
            throw new Error('Sorry, there is no such client!');
        }
        if (!this.clients[ownerName].hasOwnProperty(petName) || this.clients[ownerName][petName].procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`);
        }
        this.totalProfit += this.clients[ownerName][petName].procedures.length * 500;
        this.pets--;
        this.clients[ownerName][petName].procedures = [];
        return `Goodbye ${petName}. Stay safe!`;
    }

    toString() {
        let output = [
            `${this.clinicName} is ${Math.floor((this.pets / this.capacity) * 100)}% busy today!`,
            `Total profit: ${this.totalProfit.toFixed(2)}$`,
        ];
        Object.keys(this.clients)
            .sort((a, b) => a.localeCompare(b))
            .forEach(client => {
                output.push(`${client} with:`);
                Object.keys(this.clients[client])
                    .sort((a, b) => a.localeCompare(b))
                    .forEach(pet => {
                        let petInfo = this.clients[client][pet];
                        output.push(`---${pet} - a ${petInfo.kind.toLowerCase()} that needs: ${petInfo.procedures.join(', ')}`);
                    });
            });
        return output.join('\n');
    }
}
