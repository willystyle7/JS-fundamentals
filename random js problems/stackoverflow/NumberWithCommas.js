// Anyone know some function that make this format?   1.621.968,13

const numberWithCommas = (x) => {
    const [full, rest] = x.toString().split('.');
    return [full.replace(/\B(?=(\d{3})+(?!\d))/g, '.'), rest].join(',');
};

console.log(numberWithCommas(1621968.13));
