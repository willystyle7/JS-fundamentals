function kat(par) {
    let patern = /^([A-Za-z0-9!@#$?]+)=(\d+)<<(.+)$/;
    for (const it of par) {
        if (it === 'Last note') {
            break;
        } else {
            let result = patern.exec(it);
            if (result !== null) {
                let key = Number(result[2]);
                let cod = result[3];
                let nam = result[1];
                if (key === cod.length) {
                    nam = nam.replace(/[!@#$?]+/g, '');
                    console.log(`Coordinates found! ${nam} -> ${cod}`);
                    // let pat = /[^!@#$?]+/gm;
                    // let arr = nam.match(pat);
                    // let fin = '';
                    // // if (arr === null) {
                    // //     console.log('Nothing found!');
                    // // } else {
                    //     for (const iterator of arr) {
                    //         fin += iterator;
                    //     }
                    //     console.log(`Coordinates found! ${fin} -> ${cod}`);
                    // // }
                } else {
                    console.log('Nothing found!');
                }
            } else {
                console.log('Nothing found!');
            }
        }
    }
}
