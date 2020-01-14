// There are N (100) pirates arranged in circle. First pirate has a gun.
// He shoot number 2 and pass pistol to number 3 who shoots number 4 and pass pistol to 5 and so on ...
// Which pirate will left alive at last?

// O(n) algorithm
function solve(n = 100) {
    // init circle
    let pirates = [];
    for (let i = 0; i < n; i++) {
        pirates.push(i + 1);
    }
    let position = 0;
    // shoot until 1 left
    while (pirates.length > 1) {
        // console.log(pirates.join());
        // console.log('position: ', position);
        let next = (position + 1) % pirates.length;
        pirates.splice(next, 1);
        position = next;
    }
    // show which is alive
    console.log('alive: ', pirates[0]);
}

// O(1) math algorithm
function solve2(n = 100) {
    // console.log('alive: ', (n - (Math.pow(2, Math.floor(Math.log2(n))) - 1)) * 2 - 1);
    console.log('alive: ', 2 * n - Math.pow(2, Math.floor(Math.log2(n)) + 1) + 1);
}

// solve(99);  // 73
// solve(100);  // 73
// solve(101);  // 73
// solve(10);  // should be 5
// solve(3);  // 3
// solve(5);  // 3
solve(1);
solve(2);
solve(3);
solve(4);
solve(5);
solve(6);
solve(7);
solve(8);
solve(9);
// solve(10);
// solve(12);
// solve(13);
// solve(14);
// solve(15);
// solve(16);
// solve(17);
// solve(18);
// solve(19);
// solve(20);
// solve(21);
// solve(22);
// solve(23);
// solve(24);
// solve(25);
// solve(26);

solve2(1);
solve2(2);
solve2(3);
solve2(4);
solve2(5);
solve2(6);
solve2(7);
solve2(8);
solve2(9);
