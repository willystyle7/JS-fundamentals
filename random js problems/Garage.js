function solveGarageMap(inputArr) {
    let garagesMap = new Map();
    for (let row of inputArr) {
        let [garage, carKeyValues] = row.split(' - ');
        if (!garagesMap.has(garage)) {
            garagesMap.set(garage, [carKeyValues]);
        } else {
            let availableCars = garagesMap.get(garage);
            availableCars.push(carKeyValues);
            garagesMap.set(garage, availableCars);
        }
    }
    let sortedGarages = [...garagesMap.entries()];
    let output = '';
    for (let [currGarage, currCarKeyValue] of sortedGarages) {
        output += `Garage № ${currGarage}\n`;
        for (let currCarProperties of currCarKeyValue) {
            currCarProperties = currCarProperties.replace(/: /g, ' - ');
            output += `--- ${currCarProperties}\n`;
        }
    }
    console.log(output);
}

function solveGarageObject(input) {
    let garages = {};
    for (const line in input) {
        let [garage, carInfo] = input[line].split(' - ');
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = {};
        }
        garages[garage][line] = carInfo;
    }
    let entries = Object.entries(garages).sort((a, b) => a[0] - b[0]);
    for (const [garage, carObj] of entries) {
        console.log(`Garage № ${garage}`);
        for (const key in carObj) {
            while (carObj[key].includes(': ')) {
                carObj[key] = carObj[key].replace(': ', ' - ');
            }
            console.log(`--- ${carObj[key]}`);
        }
    }
}

function solveGarageObject2(input) {
    let garages = {};
    for (const line of input) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }
        garages[garage].push(carInfo);
    }
    let output = '';
    Object.entries(garages).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            while (currCar.includes(': ')) {
                currCar = currCar.replace(': ', ' - ');
            }
            output += `--- ${currCar}\n`;
        }
    });
    console.log(output);
}

function solveGarageObject3(input) {
    let garages = {};
    for (const line of input) {
        let [garage, carInfo] = line.split(' - ');
        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
        }
        garages[garage].push(carInfo);
    }
    let output = '';
    Object.entries(garages).sort((a, b) => a[0] - b[0]).forEach(([garage, cars]) => {
        output += `Garage № ${garage}\n`;
        for (let currCar of cars) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });
    console.log(output);
}

function solveGarageArray(input) {
    let garages = [];
    for (const line of input) {
        let [garageNumber, carInfo] = line.split(' - ');
        let found = garages.find(g => g.garageNumber === garageNumber);
        if (!found) {
            garages.push({
                garageNumber: garageNumber,
                carInfo: []
            });
            found = garages.find(g => g.garageNumber === garageNumber);
        }
        found.carInfo.push(carInfo);
    }
    let output = '';
    garages.forEach(garage => {
        output += `Garage № ${garage.garageNumber}\n`;
        for (let currCar of garage.carInfo) {
            currCar = currCar.replace(/: /g, ' - ');
            output += `--- ${currCar}\n`;
        }
    });
    console.log(output);
}