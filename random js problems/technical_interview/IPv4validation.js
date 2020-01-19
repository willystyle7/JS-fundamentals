function IPv4validation(ip) {
    let parts = ip.split('.').filter(p => p !== '');
    if (parts.length === 4 && parts.map(Number).every(num => num >= 0 && num <= 255)) {
        return true;
    } else {
        return false;
    }
}

function IPv4validationRegExp(ip) {
    let pattern = /^(?:(?:^|\.)(?:2(?:5[0-5]|[0-4]\d)|1?\d?\d)){4}$/gm;
    return pattern.test(ip);
}

console.log(IPv4validation("1.1.1.-1"));
// console.log(IPv4validation("127.0.0.1"));
// console.log(IPv4validation("255.0.0.1"));
// console.log(IPv4validation("256.0.0.1"));
// console.log(IPv4validation("255.0.0.1.1"));
console.log();
console.log(IPv4validationRegExp("..."));
// console.log(IPv4validationRegExp("127.0.0.1"));
// console.log(IPv4validationRegExp("255.0.0.1"));
// console.log(IPv4validationRegExp("256.0.0.1"));
// console.log(IPv4validationRegExp("255.0.0.1.1"));