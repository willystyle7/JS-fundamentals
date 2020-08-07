function solve2(arr) {
    let pattern = /([#$%*&])([A-z]+)\1=(\d+)!!(.+)$/;
    for (let j = 0; j < arr.length; j++) {
        let result = pattern.exec(arr[j]);
        if (result) {
            let name = result[2];
            let len = +result[3];
            let code = result[4];
            // console.log(result);
            if (code.length === len) {
                let decrypted = '';
                for (let i = 0; i < code.length; i++) {
                    decrypted += String.fromCharCode(code.charCodeAt(i) + len);
                }
                console.log(`Coordinates found! ${name} -> ${decrypted}`);
                return;
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
    }
}

// ATTENTION: this is not working READ !!! "Capturing Quantifiers and Quantifier Arithmetic"
// let pattern = /([#$%*&])([A-z]+)\1=(\d+)!!(.{\q3})$/;


function solve(arr){
    let pattern = /(#|\$|%|\*|&)(?<name>[A-Za-z]+)\1=(?<length>\d+)!!(?<code>.+)/;
    let decrypted ='';
    for(let j = 0; j < arr.length; j++) {
        let result = pattern.exec(arr[j]);
        if(result){
            let len = Number(result.groups.length);
            if(result.groups.code.length === len){
                for(let i = 0; i < result.groups.code.length; i++){
                    decrypted += String.fromCharCode(result.groups.code.charCodeAt(i) + len);
                }
                console.log(`Coordinates found! ${result.groups.name} -> ${decrypted}`);
                break;
            } else{
                console.log('Nothing found!');
            }
        } else{
            console.log('Nothing found!');
        }
    }
}

solve([
    'Ian6Hutchinson=7!!\\(58ycb4',
    "#MikeHailwood#!!'gfzxgu6768=11",
    'slop%16!!plkdek/.8x11ddkc',
    '$Steve$=9Hhffjh',
    "*DavMolyneux*=15!!efgk#'_$&UYV%h%",
    'RichardQ^uayle=16!!fr5de5kd'
]);
