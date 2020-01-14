function wedding([men, women, tables]) {
    let counter = 0;
    let couples = '';
    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            counter++;
            couples += `(${i} <-> ${j}) `;
            if (counter == tables) {
                console.log(couples);
                return;
            }
        }
    }
    console.log(couples);
}
