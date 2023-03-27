

function addTillOneDigits(num, start) {
    if(num < 10) {
        if(start < 10) {
            return start;
        } else {
            // return addTillOneDigits((start - (start % 10)) / 10, start % 10)
            num = start;
            start = 0;
            return addTillOneDigits(num, start);

        }
    }
    return addTillOneDigits((num - (num % 10)) / 10, start + num % 10)
}

console.log(addTillOneDigits(99, 0));