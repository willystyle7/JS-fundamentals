const distanceToNearestVowel = (str) => {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    let count = 0;
    return [...str].reduce((acc, v, i, arr) => {
        if (vowels.includes(v) || vowels.includes(arr[i + 1])) {
            if (count > 0) count--;
            acc = acc.concat(count);
        } else {
            count++;
            acc = acc.concat(count);
        }
        return acc;
    }, []);
};

const distanceToNearestVowel2 = (str) => {
    const vowels = ['a', 'i', 'u', 'e', 'o'];
    return [...str].map((el, idx) => {
        let offset = 0;
        while (foundVowel) {
            if (1) {
            }
        }
    });
};

/* done
const result = distanceToNearestVowel("aaaaa") // ➞ [0, 0, 0, 0, 0]
const result1 = distanceToNearestVowel("babbb") // ➞ [1, 0, 1, 2, 3]
const result2 = distanceToNearestVowel("abcdabcd") // ➞ [0, 1, 2, 1, 0, 1, 2, 3]
*/
// problem is here
// const result3 = distanceToNearestVowel('shopper'); // ➞ [2, 1, 0, 1, 1, 0, 1]
const result3 = distanceToNearestVowel('abcddabcd'); // ➞ [2, 1, 0, 1, 1, 0, 1]
console.log(JSON.stringify(result3));

// best decision
const distanceToNearestVowel3 = (str) => {
    const vowels = new Set(['a', 'i', 'u', 'e', 'o']);
    const vIndices = [];
    const chars = Array.from(str.toLowerCase());
    chars.forEach((v, i) => {
        if (vowels.has(v)) {
            vIndices.push(i);
        }
    });
    let lastNearest = 0;
    const vLen = vIndices.length;
    return chars.map((v, i) => {
        let nearest = Math.abs(i - vIndices[lastNearest]);
        if (lastNearest + 1 < vLen) {
            const alternateNear = Math.abs(i - vIndices[lastNearest + 1]);
            if (alternateNear < nearest) {
                lastNearest++;
                nearest = alternateNear;
            }
        }
        return nearest;
    });
};

const result = distanceToNearestVowel3('aaaaa'); // ➞ [0, 0, 0, 0, 0]
const result1 = distanceToNearestVowel3('babbb'); // ➞ [1, 0, 1, 2, 3]
const result2 = distanceToNearestVowel3('vbvabcfifddabcd'); // ➞ [0, 1, 2, 1, 0, 1, 2, 3]
// problem is here
const result3 = distanceToNearestVowel3('shopper'); // ➞ [2, 1, 0, 1, 1, 0, 1]
console.log(JSON.stringify(result2));
console.log(JSON.stringify(result3));
