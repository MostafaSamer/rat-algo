function quick_sort(array) {
    if (array.length < 2) return array;
    else {
        let pivot = array.shift();
        let less = array.filter(elment => elment <= pivot);
        let greater = array.filter(elment => elment > pivot);

        return [...quick_sort(less), ...[pivot], ...quick_sort(greater)]
    }
}

console.log(quick_sort([10, 5, 2, 3, 10, 34, 5]))