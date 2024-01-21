function countdown(i) {
    console.log(i);
    if (i <= 0) return;
    countdown(i-1);
}

function fact(x) {
    if (x === 1) return 1;
    else return x * fact(x-1)
}

// countdown(7)
console.log(fact(5))