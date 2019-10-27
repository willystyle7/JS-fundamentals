function rectangleArea() {
    let stdin = process.openStdin();
    stdin.addListener('data', function(d) {
        console.log('d: ', d);
        let [a, b] = d.toString().split(/[,\s]+/g);
        let area = a * b;
        console.log(area);
    });
}

rectangleArea();
