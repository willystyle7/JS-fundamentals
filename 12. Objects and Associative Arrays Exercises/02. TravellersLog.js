function travellers(input) {
 
    let travellers = new Map();
 
    for (let i = 0; i < input.length; i++) {
        let data = input[i].trim();
 
        if (data.match(/^(\w+) gets (\d+)$/)) {
            //data = data.split(" gets ");
            data = data.match(/^(\w+) gets ([\d.]+)$/);
            let name = data[1];
            let money = +data[2];
 
            if (!travellers.has(name)) {
                travellers.set(name, {
                    name: name,
                    country: new Map(),
                    money: 0
                })
            }
 
            travellers.get(name).money += money;
            travellers.get(name).money = Math.round(travellers.get(name).money);
        } else if (data.match(/^(\w+) visited the (\w+) in (\w+) - ([\d.]+)$/)) {
            data = data.match(/^(\w+) visited the (\w+) in (\w+) - ([\d.]+)$/);
 
            let name = data[1].trim();
            let landmark = data[2].trim();
            let country = data[3].trim();
            let cost = +data[4].trim();
            cost = Math.round(cost);
 
            if (!travellers.has(name)) {
                travellers.set(name, {
                    name: name,
                    country: new Map(),
                    money: 0
                })
                console.log(`Not enough money to visit ${landmark}`);
            } else if (travellers.get(name).money < cost) {
                console.log(`Not enough money to visit ${landmark}`);
            } else {
                if (!travellers.get(name).country.has(country)) {
                    travellers.get(name).country.set(country, []);
                }
 
                if (!travellers.get(name).country.get(country).includes(landmark)) {
                    travellers.get(name).country.get(country).push(landmark);
                    travellers.get(name).money -= cost;
                }
            }
        }
    }
 
    let sortedTravellers = Array.from(travellers.values())
        .sort((a, b) => b.country.size - a.country.size);
 
    for (let traveller of sortedTravellers) {
        console.log(`${traveller.name} visited ${traveller.country.size} countries and has ${traveller.money.toFixed(0)} money left`);
 
        let sortedCountries = Array.from(traveller.country)
            .sort((a, b) => b[1].length - a[1].length);
 
        for (let [country, landmarks] of sortedCountries) {
            console.log(`- ${country} -> ${landmarks.length} landmarks`);
 
            let sortedLandmarks = landmarks.sort();
 
            for (let landmark of sortedLandmarks) {
                console.log(`-- ${landmark}`);
            }
        }
    }
}
 
travellers(['Peter gets 100',
    'Peter visited the StatueOfLiberty in USA - 50',
    'Bill gets 250',
    'Tim visited the ChristTheRedeemer in Brazil - 150',
    'Bill gets 400',
    'Bill visited the MountFuji in Japan - 600',
    'Bill visited the TeatroAmazonas in Brazil - 50',
    'Bill gets 150',
    'Bill visited the ChristTheRedeemer in Brazil - 150',
    'Tim gets 500',
    'Bill visited the StatueOfLiberty in USA - 440',
    'Tim visited the StatueOfLiberty in USA - 440',
    'Maria gets 650',
    'Maria visited the StatueOfLiberty in USA - 440',
    'Maria visited the CapeCod in USA - 100']);