// https://github.com/egonSchiele/grokking_algorithms/blob/master/07_dijkstras_algorithm/javascript/01_dijkstras_algorithm.js
'use strict';

// sample matrix
let matrix = [
    [1, 1, 6],
    [2, 8, 5],
    [1, 3, 6]
];

// the graph
const graph = {};
const costs = {};
const parents = {};
for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
        let node = `${row},${col}`;
        if (!(node in graph)) {
            graph[node] = {};
        }
        if (col - 1 >= 0) {
            let targetNode = `${row},${col - 1}`;
            graph[node][targetNode] = matrix[row][col - 1];
        }
        if (col + 1 < matrix[row].length) {
            let targetNode = `${row},${col + 1}`;
            graph[node][targetNode] = matrix[row][col + 1];
        }
        if (row - 1 >= 0) {
            let targetNode = `${row - 1},${col}`;
            graph[node][targetNode] = matrix[row - 1][col];
        }
        if (row + 1 < matrix.length) {
            let targetNode = `${row + 1},${col}`;
            graph[node][targetNode] = matrix[row + 1][col];
        }
        costs[node] = Infinity;
        parents[node] = null;
    }
}
console.log(graph);

// The costs table
delete costs['0,0'];
costs['0,1'] = 1;
costs['1,0'] = 2;
console.log(graph);


// the parents table
delete parents['0,0'];
parents['0,1'] = '0,0';
parents['1,0'] = '0,0';
console.log(parents);

let processed = [];

/**
 * Find the lowest node
 * @param {Object} itCosts Hash table
 * @returns {(string|null)} The lowest node
 */
function findLowestCostNode(costs) {
    let lowestCost = Infinity;
    let lowestCostNode = null;

    // Go through each node
    for (let node in costs) {
        const cost = costs[node];
        // If it's the lowest cost so far and hasn't been processed yet...
        if (cost < lowestCost && processed.indexOf(node) === -1) {
            // ... set it as the new lowest-cost node.
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
    const cost = costs[node];
    // Go through all the neighbors of this node
    const neighbors = graph[node];
    Object.keys(neighbors).forEach(function (n) {
        const new_cost = cost + neighbors[n];
        // If it's cheaper to get to this neighbor by going through this node
        if (costs[n] > new_cost) {
            // ... update the cost for this node
            costs[n] = new_cost;
            // This node becomes the new parent for this neighbor.
            parents[n] = node;
        }
    });

    // Mark the node as processed
    processed = processed.concat(node);

    // Find the next node to process, and loop
    node = findLowestCostNode(costs);
}

console.log('Cost from the start to each node:');
console.log(costs); // { a: 5, b: 2, fin: 6 }
