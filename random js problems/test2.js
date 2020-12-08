setTimeout(() => {
    Promise.resolve('Up!').then(console.log);
    console.log('Sum');
});
console.log('Join');
