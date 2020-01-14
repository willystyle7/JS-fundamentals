// function solve(params) {
//     let armies = {};
//     for (let param of params) {
//         if (param.endsWith('arrives')) {
//             let leader = param.split(' ')[0];
//             armies[leader] = {};
//         } else if (param.endsWith('defeated')) {
//             let leader = param.split(' ')[0];
//             if (armies.hasOwnProperty(leader)) {
//                 delete armies[leader];
//             }
//         } else if (param.includes(': ')) {
//             let [leader, army] = param.split(': ');
//             let [armyName, armyCount] = army.split(', ');
//             if (armies.hasOwnProperty(leader)) {
//                 if (!armies[leader].hasOwnProperty(armyName)) {
//                     armies[leader][armyName] = 0;
//                 }
//                 armies[leader][armyName] = +armyCount;
//             }
//         } else if (param.includes(' + ')) {
//             let [armyName, armyCount] = param.split(' + ');
//             for (const leader in armies) {
//                 for (const army in armies[leader]) {
//                     if (army == armyName) {
//                         armies[leader][army] += +armyCount;
//                     }
//                 }
//             }
//         }
//     }

//     Object.keys(armies)
//         .sort((a, b) => totalArmyCount(armies[b]) - totalArmyCount(armies[a]))
//         .forEach(leader => {
//             console.log(`${leader}: ${totalArmyCount(armies[leader])}`);
//             Object.keys(armies[leader])
//                 .sort((a, b) => armies[leader][b] - armies[leader][a])
//                 .forEach(army => {
//                     console.log(`>>> ${army} - ${armies[leader][army]}`);
//                 });
//         });

//     function totalArmyCount(obj) {
//         let totalCount = 0;
//         for (const army in obj) {
//             totalCount += +obj[army];
//         }
//         return totalCount;
//     }
// }

function solve(params) {
    let armies = {};
    let armyLeaders = [];

    for (let param of params) {
        if (param.includes('arrives')) {
            let indexOfArrives = param.indexOf('arrives');
            let leader = param.slice(0, indexOfArrives).trim();
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {
                    armiesName: {},
                    totalArmyCount: 0
                };
            }
            armyLeaders.push(leader);
        } else if (param.includes('defeated')) {
            let indexOfDefeated = param.indexOf('defeated');
            let leader = param.slice(0, indexOfDefeated).trim();
            let indexOfLeader = armyLeaders.indexOf(leader);
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
                armyLeaders.splice(indexOfLeader, 1);
            }
        } else if (param.includes(':')) {
            let [leader, army] = param.split(': ');
            let [armyName, armyCount] = army.split(', ');
            if (armies.hasOwnProperty(leader)) {
                if (!armies[leader].armiesName.hasOwnProperty(armyName)) {
                    armies[leader].armiesName[armyName] = Number(armyCount);
                    armies[leader].totalArmyCount += Number(armyCount);
                }
            }
        } else if (param.includes('+')) {
            let [armyName, armyCount] = param.split(' + ');
            armyLeaders.forEach(leader => {
                for (let army in armies[leader]) {
                    if (armies[leader][army].hasOwnProperty(armyName)) {
                        armies[leader].armiesName[armyName] += Number(
                            armyCount
                        );
                        armies[leader].totalArmyCount += Number(armyCount);
                    }
                }
            });
        }
    }
    // console.log(armies);
    Object.entries(armies)
        .sort((a, b) => b[1].totalArmyCount - a[1].totalArmyCount)
        .forEach(army => {
            console.log(`${army[0]}: ${army[1].totalArmyCount}`);
            Object.entries(army[1].armiesName)
                .sort((a, b) => b[1] - a[1])
                .forEach(armyName => {
                    console.log(`>>> ${armyName[0]} - ${armyName[1]}`)

                });

        });
}

solve(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);
