// NOT COMPLETED

let graph = {};
graph["start"] = {};
graph["start"]["a"] = 6;
graph["start"]["b"] = 2;

graph["a"] = {};
graph["a"]["fin"] = 1;

graph["b"] = {};
graph["b"]["a"] = 3;
graph["b"]["fin"] = 5;

graph["fin"] = {};

let costs = {};
costs["a"] = 6;
costs["b"] = 2;
costs["fin"] = Math.min();

let parents = {};
parents["a"] = "start";
parents["b"] = "start";
parents["fin"] = null;

let processed = []

function searchGraph() {
    node = findLowestCostNode(costs);
    while (node) {
        cost = costs[node];
        neighbors = graph[node]
        Object.keys(neighbors).forEach(n => {
            new_cost = cost + neighbors[n];
            if (cost[n] > new_cost) {
                costs[n] = new_cost
                parents[n] = node
            }
        });
        processed.push(node);
        node = findLowestCostNode(costs);
    }
}

function findLowestCostNode(costs) {
    lowestCost = Math.min();
    lowestCostNode = null;
    Object.keys(costs).forEach(key => {
        cost = costs[key]
        if (cost < lowestCost && !processed.includes(key)) {
            lowestCost = cost;
            lowestCostNode = key;
        }
    });
    return lowestCostNode;
}

searchGraph()
console.log(processed)