let buttonDec = document.getElementById('dec');
let buttonInc = document.getElementById('inc');
let el = document.getElementById('inputId');
buttonInc.addEventListener('click', increment);
buttonDec.addEventListener('click', decrement);
function increment() {
    let val = el.value;
    let positionOfPoint = val.indexOf('.');
    let digitsAfterPoint = positionOfPoint >= 0 ? val.length - positionOfPoint - 1 : 0;
    let incrementValue = Math.pow(10, -digitsAfterPoint);
    el.value = (+val + incrementValue).toFixed(digitsAfterPoint);
}
function decrement() {
    let val = el.value;
    let positionOfPoint = val.indexOf('.');
    let digitsAfterPoint = positionOfPoint >= 0 ? val.length - positionOfPoint - 1 : 0;
    let incrementValue = Math.pow(10, -digitsAfterPoint);
    el.value = (+val - incrementValue).toFixed(digitsAfterPoint);
}

{/* <button id="dec">
Decrement
</button>
<input id="inputId" type="text" placeholder="Enter Number" />
<button id="inc">
Increment
</button> */}