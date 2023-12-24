function NthNumber(S, N){
    function sumDigits(number) {
        let value = number;
        let sum = 0;
        while (value) {
            sum += value % 10;
            value = Math.floor(value / 10);
        }
        return sum;
    }

    let num = 0;
    let position = 0;
    let member = null
    while(position < N) {
        num++;
        if (sumDigits(num) === S) {
            position++;
            member = num;
        }
    }
    return member;
 }

//  console.log(NthNumber(3, 4)); // 30