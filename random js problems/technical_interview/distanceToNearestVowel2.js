function distanceToNearestVowel(str) {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    const arr = str.toLowerCase().split('');
    return arr.reduce((acc, curr, index) => {
        if (vowels.includes(curr)) {
            acc.push(0);
            return acc;
        }
        let stringRightCheck, stringLeftCheck;
        if (index > 0) {
            stringLeftCheck = arr.slice(0, index).reverse();
        }
        if (index < arr.length - 1) {
            stringRightCheck = arr.slice(index + 1);
        }
        let result = Math.min(findFirstVowel(stringRightCheck), findFirstVowel(stringLeftCheck));
        if (result === Number.MAX_SAFE_INTEGER) {
            result = Infinity;
        }
        acc.push(result);
        return acc;
    }, []);

    function findFirstVowel(arr) {
        if (arr === undefined) {
            return Number.MAX_SAFE_INTEGER;
        }
        for (let i = 0; i < arr.length; i++) {
            if (vowels.includes(arr[i])) {
                return i + 1;
            }
        }
        return Number.MAX_SAFE_INTEGER;
    }
}


// distanceToNearestVowel("stefan");
// distanceToNearestVowel("avioaabbcdabcde");
console.log(distanceToNearestVowel('aei'));
