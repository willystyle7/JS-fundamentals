function drugo($param) {
    if ($param) {
        return 'neshto';
    }

    return 'defaultno neshto';
}

function drugo2($param) {
    return $param !== undefined && 'neshto' || 'defaultno neshto';
}

function drugo3($param) {
    return $param && 'neshto' || 'defaultno neshto';
}

console.log(drugo2(0));
console.log(drugo2(''));
console.log(drugo2(false));
console.log(drugo2(true));
console.log(drugo2('0'));
console.log(drugo2());
console.log();
console.log(drugo3(0));
console.log(drugo3(''));
console.log(drugo3(false));
console.log(drugo3(true));
console.log(drugo3('0'));
console.log(drugo3());