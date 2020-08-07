function replaceArabicDigits (txt) {
    let dictionary = {
        1: '१',
        2: '२',
        3: '३',
        4: '४',
        5: '५'
    }
    return txt.replace(/[1-5]/mg, function(match, index) {
        return dictionary[match];
    });
}

let someEnglishText = '1. Number one 2. two .. 5. five 6. six';
console.log(replaceArabicDigits(someEnglishText));