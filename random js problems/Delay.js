console.log(1);

new Promise(function(resolve, reject) {
    setTimeout(() => {
        var y = 2;
        console.log(y);
        resolve();
    }, 3000)
}).then(() => console.log(3));

