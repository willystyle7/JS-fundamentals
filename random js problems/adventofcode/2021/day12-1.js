// https://adventofcode.com
// How many paths through this cave system are there that visit small caves at most once?

function solve(arr) {
    function isLower(str) {
        return str === str.toLowerCase();
    }

    arr = arr.split('\n').map(row => (row.split('-')));
    let roads = {};
    arr.forEach(road => {
        let [from, to] = road;
        if (!roads.hasOwnProperty(from)) {
            roads[from] = [];
        }
        roads[from].push(to);
        if (!roads.hasOwnProperty(to)) {
            roads[to] = [];
        }
        roads[to].push(from);
    });

    let paths = [['start']];
    let fullPaths = [];
    while (paths.length > 0) {
        let path = paths.shift();
        let lastPoint = path[path.length - 1];
        let newRoads = roads[lastPoint];
        for (let newRoad of newRoads) {
            if (!(isLower(newRoad) && path.includes(newRoad))) {
                let newPath = [...path, newRoad];
                if (newRoad === 'end') {
                    fullPaths.push(newPath);
                } else {
                    paths.push(newPath);
                }
            }
        }
    }
    // console.log(fullPaths);
    return fullPaths.length;
}

let arr =
`start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

console.log(solve(arr)); // 10

let arr1 =
`yb-start
de-vd
rj-yb
rj-VP
OC-de
MU-de
end-DN
vd-end
WK-vd
rj-de
DN-vd
start-VP
DN-yb
vd-MU
DN-rj
de-VP
yb-OC
start-rj
oa-MU
yb-de
oa-VP
jv-MU
yb-MU
end-OC`;

console.log(solve(arr1)); // 4411

