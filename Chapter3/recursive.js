function countdown(i) {
    console.log(i);
    if (i <= 0) return;
    countdown(i-1);
}

function fact(x) {
    if (x === 1) return 1;
    else return x * fact(x-1)
}

function sum(arr) {
    let total = 0;
    arr.forEach(x => {
        total += x;
    });
    return total;
}

function sum_rec(arr) {
    if (arr.length === 0) return 0;
    let x = arr.shift();
    return x + sum_rec(arr);
}


// countdown(7)
console.log(fact(5))
console.log(sum([1, 2, 3, 4, 5, 6, 7]))
console.log(sum_rec([1, 2, 3, 4, 5, 6, 7]))