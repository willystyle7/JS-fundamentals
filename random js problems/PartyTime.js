function partyTime(input) {
    // if (input.filter(x => typeof x !== 'string').length > 0) {
    // if (input.filter(x => x.length > 9).length > 0) {
    //     throw new Error();
    // }
    // input = input.map(x => x.toString().slice(0, 9));
    input = input.map(x => x.substring(0, 9));
    let vipGuestsList = new Set();
    let regularGuestsList = new Set();
    let reservation = input.shift();
    while (reservation !== 'PARTY') {
        // if (reservation.length === 8) {
        // if (reservation[0] >= '0' && reservation[0] <= '9') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.add(reservation);
        } else {
            regularGuestsList.add(reservation);
        }
        // }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.has(guest)) {
            vipGuestsList.delete(guest);
        }
        if (regularGuestsList.has(guest)) {
            regularGuestsList.delete(guest);
        }
    }
    console.log(vipGuestsList.size + regularGuestsList.size);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}

function partyTime(input) {
    let vipGuestsList = [];
    let regularGuestsList = [];
    let reservation = input.shift();
    while (reservation !== 'PARTY') {
        if (/^\d+/.test(reservation)) {
            vipGuestsList.push(reservation);
        } else {
            regularGuestsList.push(reservation);
        }
        reservation = input.shift();
    }
    for (let guest of input) {
        if (vipGuestsList.indexOf(guest) >= 0) {
            vipGuestsList.splice(vipGuestsList.indexOf(guest), 1);
        }
        if (regularGuestsList.indexOf(guest) >= 0) {
            regularGuestsList.splice(regularGuestsList.indexOf(guest), 1);
        }
    }
    console.log(vipGuestsList.length + regularGuestsList.length);
    vipGuestsList.forEach(el => console.log(el));
    regularGuestsList.forEach(el => console.log(el));
}
