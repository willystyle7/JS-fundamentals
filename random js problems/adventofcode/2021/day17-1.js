// https://adventofcode.com
// Find the initial velocity that causes the probe to reach the highest y position and still eventually be within the target area after any step.
// What is the highest y position it reaches on this trajectory?

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

    let vxMax = 1000;
    let vyMax = 1000;
    allTraceMax = [];
    for (let vx = 1; vx <= vxMax; vx++) {
        for (let vy = 0; vy <= vyMax; vy++) {
            let velocity = {
                x: vx,
                y: vy
            }
            let res = shoot(velocity);
            if (res.success) {
                maxY = Math.max(...res.trace.map(p => p.y));
                allTraceMax.push(maxY);
            }
        }
    }

    return Math.max(...allTraceMax);
}

// target area: x=20..30, y=-10..-5
let target = {
    xMin: 20,
    xMax: 30,
    yMin: -10,
    yMax: -5
};

console.log(solve(target)); // 45

// target area: x=179..201, y=-109..-63
let target1 = {
    xMin: 179,
    xMax: 201,
    yMin: -109,
    yMax: -63
};

console.log(solve(target1)); // 5886

