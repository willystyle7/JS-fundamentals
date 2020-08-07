function arenaTier(input) {
    let start = 0;
    let endProgram = false;
    let obj = {};
    for (let line of input) {
        if (line === 'Ave Cesar') {
            // ends the loop
            endProgram = true;
            break;
        }
        if (line.includes('vs')) {
            // fighting
            start = input.indexOf(line);
            break;
        } else {
            let [name, technique, skill] = line.split(' -> ');
            skill = Number(skill);
            if (!obj.hasOwnProperty(name)) {
                obj[name] = {};
                obj[name][technique] = skill;
            }
            if (!obj[name].hasOwnProperty(technique)) {
                obj[name][technique] = skill;
            } else {
                if (skill > obj[name][technique]) {
                    obj[name][technique] = skill;
                }
            }
        }
    }
    for (let name in obj) {
        // calc totalSkill
        let totalSkill = 0;
        for (let tech in obj[name]) {
            totalSkill += obj[name][tech];
        }
        obj[name].totalSkill = totalSkill;
    }

    if (start > 0) {
        for (let i = start; i < input.length; i++) {
            if (input[i] === 'Ave Cesar') {
                endProgram = true;
                break;
            }
            let [gladiator1, gladiator2] = input[i].split(' vs ');
            let willFight = false;
            let commonTechnique = '';
            if (
                obj.hasOwnProperty(gladiator1) &&
                obj.hasOwnProperty(gladiator2)
            ) {
                for (let tech in obj[gladiator1]) {
                    if (obj[gladiator2].hasOwnProperty(tech)) {
                        willFight = true;
                        commonTechnique = tech;
                        break;
                    }
                }
            }
            if (willFight) {
                if (obj[gladiator1].totalSkill > obj[gladiator2].totalSkill) {
                    delete obj[gladiator2];
                } else if (
                    obj[gladiator1].totalSkill < obj[gladiator2].totalSkill
                ) {
                    delete obj[gladiator1];
                }
            }
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => {
        //sorted by totalSkill first, by name second
        if (b[1].totalSkill - a[1].totalSkill === 0) {
            // return a[0].localeCompare(b[0]);
            return 0;
        } else {
            return b[1].totalSkill - a[1].totalSkill;
        }
    });

    if (endProgram) {
        // Ave Cesar
        for (let pair of sorted) {
            console.log(`${pair[0]}: ${pair[1].totalSkill} skill`);
            pair[1] = Object.entries(pair[1]).sort((a, b) => {
                // if (b[1] - a[1] !== 0) {
                if (a[1] === b[1]) {
                    return a[0].localeCompare(b[0]);
                } else {
                    return b[1] - a[1];
                }
            });
            for (let kvp of pair[1]) {
                if (kvp[0] !== 'totalSkill') {
                    console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
                }
            }
        }
    }
}

function arenaTier2(input = []) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('Ave Cesar')) {
            break;
        }
        if (!input[i].includes('vs')) {
            let [name, technique, skill] = input[i].split(' -> ');
            skill = +skill;
            if (!result.hasOwnProperty(name)) {
                result[name] = {};
                result[name][technique] = skill;
            }
            if (!result[name].hasOwnProperty(technique)) {
                result[name][technique] = skill;
            } else {
                if (result[name][technique] < skill) {
                    result[name][technique] = skill;
                }
            }
        } else {
            let [name1, name2] = input[i].split(' vs ');
            if (result.hasOwnProperty(name1) && result.hasOwnProperty(name2)) {
                let firstTech = [...Object.keys(result[name1])];
                let secondTech = [...Object.keys(result[name2])];
                let isTrue = false;
                for (let j = 0; j < firstTech.length; j++) {
                    if (secondTech.includes(firstTech[j])) {
                        isTrue = true;
                        break;
                    }
                }
                if (isTrue === true) {
                    let firstSkill = 0;
                    for (const key in result[name1]) {
                        if (result[name1].hasOwnProperty(key)) {
                            firstSkill += result[name1][key];
                        }
                    }
                    let secondSkill = 0;
                    for (const key in result[name2]) {
                        if (result[name2].hasOwnProperty(key)) {
                            secondSkill += result[name2][key];
                        }
                    }
                    if (firstSkill > secondSkill) {
                        delete result[name2];
                    } else {
                        delete result[name1];
                    }
                }
            }
        }
    }
    let skillOrder = {};
    let names = [...Object.keys(result)];
    for (const name of names) {
        let sum = 0;
        for (const tech in result[name]) {
            sum += result[name][tech];
        }
        skillOrder[name] = sum;
    }
    let output = [...Object.entries(skillOrder)].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < output.length; i++) {
        console.log(`${output[i][0]}: ${output[i][1]} skill`);
        let ss = [...Object.entries(result[output[i][0]])];
        for (const s of ss.sort(
            (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
        )) {
            console.log(`- ${s[0]} <!> ${s[1]}`);
        }
    }
}
