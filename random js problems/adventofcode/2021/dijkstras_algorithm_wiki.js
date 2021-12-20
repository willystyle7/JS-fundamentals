// https://bg.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D1%8A%D0%BC_%D0%BD%D0%B0_%D0%94%D0%B5%D0%B9%D0%BA%D1%81%D1%82%D1%80%D0%B0

// sample matrix
// let matrix = [
//     [1, 1, 6, 7],
//     [2, 8, 5, 1],
//     [1, 1, 6, 1],
//     [2, 3, 6, 1]
// ];

// matrix from advent
let arr =
`1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

let matrix = arr.split('\n').map(r => r.split('').map(Number));

let mapMatrix = [];

// prepare neghbourhood matrix (mapMatrix) aka Adjacency Matrix

let nodeCount = matrix.length * matrix[0].length;

for (let i = 0; i < nodeCount; i++) {
    let row = []
    for (let j = 0; j < nodeCount; j++) {
        row.push(0);
    }
    mapMatrix.push(row);
}

for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        if (col - 1 >= 0) {
            let weight = matrix[row][col - 1];
            let from = row * matrix[0].length + col;
            let to = row * matrix[0].length + col - 1;
            mapMatrix[from][to] = weight;
        }
        if (col + 1 < matrix[row].length) {
            let weight = matrix[row][col + 1];
            let from = row * matrix[0].length + col;
            let to = row * matrix[0].length + col + 1;
            mapMatrix[from][to] = weight;
        }
        if (row - 1 >= 0) {
            let weight = matrix[row - 1][col];
            let from = row * matrix[0].length + col;
            let to = (row - 1) * matrix[0].length + col;
            mapMatrix[from][to] = weight;
        }
        if (row + 1 < matrix.length) {
            let weight = matrix[row + 1][col];
            let from = row * matrix[0].length + col;
            let to = (row + 1) * matrix[0].length + col;
            mapMatrix[from][to] = weight;
        }
    }
}

// console.log(mapMatrix);

// prepare helper arrays
let distance = [];
let visitedNodes = [];
for (let i = 0; i < nodeCount; i++) {
    distance[i] = Infinity;
    visitedNodes[i] = false;
}
// start node is 0
distance[0] = 0;

// Dijkstra algorithm
for (let count = 0; count < nodeCount - 1; count++) {
    // find min distance
    let min = Infinity;
    let minIndex = -1;
    for (let i = 0; i < nodeCount; i++) {
        if (visitedNodes[i] === false && distance[i] < min) {
            min = distance[i];
            minIndex = i;
        }
    }
    visitedNodes[minIndex] = true;
    // iterate
    for (let j = 0; j < nodeCount; j++) {
        if (!visitedNodes[j]
            && mapMatrix[minIndex][j] !== 0
            && distance[minIndex] !== Infinity
            && distance[j] > distance[minIndex] + mapMatrix[minIndex][j]) {
            // change min distance
            distance[j] = distance[minIndex] + mapMatrix[minIndex][j];
        }
    }
}

for (let j = 0; j < distance.length / 2; j++) {
    let currentShortestWay = Infinity;
    let nextNodeOnShortestWay = 0;
    for (let i = 0; i < distance.length; i++) {
        if ((distance[i] < currentShortestWay) && (visitedNodes[i] !== -1)) {
            currentShortestWay = distance[i];
            nextNodeOnShortestWay = i;
        }
    }
    for (let i = 0; i < distance.length; i++) {
        if (visitedNodes[i] !== -1) {
            if (mapMatrix[nextNodeOnShortestWay][i] !== 0) {
                if (distance[i] > distance[nextNodeOnShortestWay] + mapMatrix[nextNodeOnShortestWay][i]) {
                    let newDistance = distance[nextNodeOnShortestWay] + mapMatrix[nextNodeOnShortestWay][i];
                    distance[i] = newDistance;
                }
            }
        }
    }
    visitedNodes[nextNodeOnShortestWay] = -1;
}

// print shortest ways
// for (let i = 0; i < distance.length; i++) {
//     if (distance[i] === Infinity) {
//         console.log(`The shortest way to node: ${i + 1}, is – "start point"`);
//     } else {
//         console.log(`The shortest way to node: ${i + 1}, is – ${distance[i]}`);
//     }
// }

// print path to last element
console.log(distance[nodeCount - 1]);