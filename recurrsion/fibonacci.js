function fn(n) {
    if (n == 0 || n == 1)
        return n
    return fn(n - 1) + fn(n - 2)
}

console.log(fn(6));

// 1 + 1 + 2 + 3 + 5