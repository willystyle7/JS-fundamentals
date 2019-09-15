function solve(arr) {
    let longestSubsequence = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let currentSubsequence = [];
        currentSubsequence.push(arr[i]);
        currentIndex = i;
        while (true) {
            currentIndex++;
            if ((arr[currentIndex - 1] > 0 && arr[currentIndex] < 0) || (arr[currentIndex - 1] < 0 && arr[currentIndex] > 0)) {
                currentSubsequence.push(arr[currentIndex]);
            } else {
                i = currentIndex;
                break;
            }
        }
        if (currentSubsequence.length > longestSubsequence.length) {
            longestSubsequence = currentSubsequence.slice();
        }
    }
    if (longestSubsequence.length >= 3) {
        console.log(`The longest sequence is ${longestSubsequence.join(', ')}`);
    } else {
        console.log(`In ${arr.join(', ')} no special sequence is found`);
    }
}

solve([1, -2, 1, -1, 2, 1, -1]);
solve([-1, -1, -1, 1, -1]);
solve([1, 2, 3, 4, 5]);

