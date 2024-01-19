function findSmallest(arr) {
    smallest = arr[0];
    smallest_index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallest_index = i
        }
    }
    return smallest_index;
}

function selectionSort(arr) {
    let newArr = [];
    while (arr.length) {
        let smallest_index = findSmallest(arr)
        newArr.push(arr.splice(smallest_index, 1)[0]);
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10, 1, 7]))