function simple_search(list, item) {
    for (let i = 0; i<list.length; i++) {
        if (list[i] === item) return i
    }
    return null
}

function binary_search(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];
        if (guess === item) return mid;
        if (guess > item) high = mid - 1;
        else low = mid + 1
    }
    return null
}

const list = Array.from({ length: 100000 }, (_, index) => index + 1);
let item_index = binary_search(list, 555);

console.log(item_index)