let graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

function search(name) {
    let searchQueue = [];
    searchQueue.push(...graph[name]);
    let searched = [];
    while (searchQueue.length) {
        let person = searchQueue.shift();
        if (!searched.includes(person)) {
            if (personIsSeller(person)) return person + " is a mango seller!"
            else {
                searchQueue.push(...graph[person]);
                searched.push(person)
            }
        }
    }
    return;
}

function personIsSeller(name) {
    return name.slice(-1) === "m"
}

console.log(search("you"))