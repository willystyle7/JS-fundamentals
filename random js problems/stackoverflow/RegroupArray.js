// Initial array:
let foo = ["a", "b", "C", "D", "e", "f", "G", "H", "I", "j", "k", "l", "M", "n" ]
// Desired array:
let bar = ["a", "b", ["C", "D"], "e", "f", ["G", "H", "I"], "j", "k", "l", ["M"], "n" ]

function regroupArray(array) {
    let temp = array.map(el => el >= 'A' && el <= 'Z' ? [el] : el);
    temp.forEach((el, i, arr) => {
        if (Array.isArray(el)) {
            while (Array.isArray(arr[i + 1])) {
                arr[i] = arr[i].concat(arr[i + 1]);
                arr.splice(i + 1, 1);
            }
        }
    });
    return temp;
}

console.log(regroupArray2(foo));