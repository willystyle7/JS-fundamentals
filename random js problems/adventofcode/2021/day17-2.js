// https://adventofcode.com
// How many distinct initial velocity values cause the probe to be within the target area after any step?

function solve(target) {
    function shoot(velocity) {
        // start position
        let x = 0;
        let y = 0;

        let success = false;
        let trace = [{x: 0, y: 0}];
        while (x <  target.xMax && y > target.yMin) {
            x += velocity.x;
            y += velocity.y;
            if (velocity.x > 0) {
                velocity.x -= 1;
            } else if (velocity.x < 0) {
                velocity.x += 1;
            }
            velocity.y -= 1;
            trace.push({x: x, y: y});
            if (x >= target.xMin && x <= target.xMax && y >= target.yMin && y <= target.yMax) {
                success = true;
                break;
            }
        }

        return {
            success: success,
            trace: trace
        };
    }

    let vxMin = 1;
    let vxMax = 1000;
    let vyMin = -1000;
    let vyMax = 1000;
    allSuccesses = [];
    for (let vx = vxMin; vx <= vxMax; vx++) {
        for (let vy = vyMin; vy <= vyMax; vy++) {
            let velocity = {
                x: vx,
                y: vy
            }
            let res = shoot(velocity);
            if (res.success) {
                allSuccesses.push(`${vx},${vy}`);
            }
        }
    }

    return allSuccesses.length;
}

// target area: x=20..30, y=-10..-5
let target = {
    xMin: 20,
    xMax: 30,
    yMin: -10,
    yMax: -5
};

console.log(solve(target)); // 112

// target area: x=179..201, y=-109..-63
let target1 = {
    xMin: 179,
    xMax: 201,
    yMin: -109,
    yMax: -63
};

console.log(solve(target1)); // 1806

