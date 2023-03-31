

function addTillOneDigits(num, start) {

    if(num < 1) {
        if(start < 10) {
            return start;
        }
        if( start >= 10) {
            return addTillOneDigits(start, 0);
        }
    }
    return addTillOneDigits((num - (num % 10)) / 10, start + (num % 10))
}

console.log(addTillOneDigits(95, 0));