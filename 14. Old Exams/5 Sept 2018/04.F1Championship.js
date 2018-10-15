function solve(array) {
    let teams = new Map();
    for (let input of array) {
        let inputArray = input.split(" -> ");
        let teamName = inputArray[0];
        let pilotName = inputArray[1];
        let pilotPoints = parseFloat(inputArray[2]);
        if (!teams.has(teamName)) {
            teams.set(teamName, new Map());
        }
        if (!teams.get(teamName).has(pilotName)) {
            teams.get(teamName).set(pilotName, 0);
        }
        teams.get(teamName).set(pilotName, teams.get(teamName).get(pilotName) + pilotPoints);
    }
    //sort Map by team accumulated points
    teams = new Map([...teams.entries()].sort((a, b) => {return ([...a[1].entries()].reduce((x, y) => x + y[1], 0) < [...b[1].entries()].reduce((x, y) => x + y[1], 0))}));
    teams = [...teams.entries()];
    for (let i = 0; i < 3; i++) {
        console.log(teams[i][0] + ": " + [...teams[i][1].entries()].reduce((a, b) => a + b[1], 0));
        //console.log(teams[i][1]);
        let sortedTeam = new Map([...teams[i][1]].sort((a, b) => {return a[1] < b[1]}));
        for (let player of sortedTeam) {
            console.log("-- " + player[0] + " -> " + player[1]);
        }
    }
}

solve([
  "Mercedes -> Lewis Hamilton -> 10",
  "Ferrari -> Kimi Raikonnen -> 25",
  "Ferrari -> Sebastian Vettel -> 18",
  "Mercedes -> Valteri Bottas -> 8",
  "Red Bull -> Max Verstapen -> 6",
  "Red Bull -> Daniel Ricciardo -> 4"
]);
