function lastKNumSeq(num1, num2) {
    result = [1];

    for (let i = 0; i < num1 - 1; i++) {
        let sum = 0;
        if (num2 > result.length) {
            sum = result.reduce((acc, cv) => acc + cv, 0);
            result.push(sum);
        } else {
            for (let i = result.length - num2; i < result.length; i++) {
                sum += result[i]
            }
            result.push(sum);
        }
    }
    console.log(result);
}
lastKNumSeq(8, 2);