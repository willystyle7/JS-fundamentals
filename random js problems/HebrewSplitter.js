function getText(string) {
    return {
        hebrew: string.match(/[\u0590-\u05fe]+/gi),
        english: string.match(/[A-z]+/gi)
    };
}

function hebrewSplitter(string) {
    return string.split(/[^A-z\u0590-\u05fe]+/gi);
}

function hebrewSplitter2(string) {
    // return string.match(/([\u0590-\u05fe]+)|([^א-ת]+)/gi);
    return string.match(/([\u0590-\u05fe]+)|([^\u0590-\u05fe]+)/gi);
}


let result = getText('אָלֶף־בֵּית עִבְרִי hello one מֵם סוֹפִית');
console.log(result);
let result2 = hebrewSplitter('אָלֶף־בֵּית עִבְרִי hello one מֵם סוֹפִית');
console.log(result2);
let result3 = hebrewSplitter2('אָלֶף־בֵּית עִבְרִי hello one מֵם סוֹפִית');
console.log(result3);
let result4 = hebrewSplitter2('מה {שלום} כולם?');
console.log(result4);