function solve(input) {
    let key = input.shift();
    let league = {};
    let line = input.shift();
    while (line !== 'final') {
        let [codedTeamA, codedTeamB, score] = line.split(' ');
        teamA = codedTeamA.split(key)[1].split('').reverse().join('').toUpperCase();
        teamB = codedTeamB.split(key)[1].split('').reverse().join('').toUpperCase();
        let [goalsA, goalsB] = score.split(':').map(Number);
        let pointsA = 1;
        let pointsB = 1;
        if (goalsA > goalsB) {
            pointsA = 3;
            pointsB = 0;
        } else if (goalsA < goalsB) {
            pointsA = 0;
            pointsB = 3;
        }
        addInfoToLeague(teamA, pointsA, goalsA);
        addInfoToLeague(teamB, pointsB, goalsB);
        line = input.shift();
    }
    let sortedKeys = Object.keys(league);
    console.log('League standings:');
    sortedKeys.sort((a, b) => league[b].points - league[a].points || a.localeCompare(b));
    sortedKeys.forEach((team, index) => {
        console.log(`${index + 1}. ${team} ${league[team].points}`);
    });
    console.log('Top 3 scored goals:');
    sortedKeys.sort((a, b) => league[b].goals - league[a].goals || a.localeCompare(b));
    for (let i = 0; i < (sortedKeys.length < 3 ? sortedKeys.length : 3); i++) {
        let team = sortedKeys[i];
        console.log(`- ${team} -> ${league[team].goals}`);
    }

    function addInfoToLeague (team, points, goals) {
        if (!league.hasOwnProperty(team)) {
            league[team] = {
                points: 0,
                goals: 0
            };
        }
        league[team].points += points;
        league[team].goals += goals;
    }
}

solve([
    '??',
    '??ecnarF?? ??kramneD?? 0:0',
    '..??airagluB??32 ??dnalgnE??gf 3:2',
    'Fg??NIAPS?? fgdrt%#$??YNAMREG??gtr 3:4',
    '??eCnArF?? >>??yLATi??<< 2:2',
    'final'
]);
