function sumPrimes(num) {
    function prime(num) {
        let start = 2;
        let arr = [];
        while (start < num) {
            arr.push(start);
            start++;
        }
        return arr;
    } // end of inner function

    return prime(num)
        .filter((val, index, arr) => {
            let increase = arr[0];
            let next;
            while (increase < arr.length) {
                next = val / increase;
                if (arr.includes(next)) {
                    return false;
                }
                increase++;
            }
            let squared = Math.sqrt(val);
            if (arr.includes(squared)) return false;
            return true;
        })
        .reduce((acc, val) => {
            acc += val;
            return acc;
        });
}

// method: Sieve Of Eratosthenes
function sumPrimes2(num) {
    // A value in prime[i] will finally be false if i is Not a prime, else true.
    let prime = [];
    for (let i = 0; i < num; i++) prime[i] = true;
    for (let p = 2; p * p <= num; p++) {
        // If prime[p] is not changed, then it is a prime
        if (prime[p] == true) {
            // Update all multiples of p
            for(let i = p * p; i <= num; i += p) prime[i] = false;
        }
    }
    prime[0] = false; // 0 is not prime
    prime[1] = false; // 1 is not prime
    return prime.reduce((acc, val, index) => val ? acc + index : acc, 0)
}

// test first method
console.time()
console.log(sumPrimes(977));
// Test case 1

console.log(sumPrimes(10));
// Test case 2
console.timeEnd();

// test Sieve Of Eratosthenes method
console.time()
console.log(sumPrimes2(977));
// Test case 1

console.log(sumPrimes2(10));
// Test case 2
console.timeEnd();