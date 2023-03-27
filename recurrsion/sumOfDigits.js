function sumOfDigits(num, start) {
    if(num < 10 ) {
        return start + num;
    };
    return sumOfDigits((num - (num % 10)) / 10, start + (num % 10))
}

console.log(sumOfDigits(524, 0))