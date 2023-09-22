function aggElem(arr) {
    let sum = 0;
    let inversedSum = 0;
    let concatedSum = '';
    for (const el of arr) {
        sum += el;
        inversedSum += 1 / el;
        concatedSum += el.toString();
    }
    console.log(sum);
    console.log(inversedSum);
    console.log(concatedSum);
}
aggElem([2, 4, 8, 16]);