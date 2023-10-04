function diagonalSums(arrays) {
    let n = 0;
    let m = arrays.length - 1;
    let sumMain = 0;
    let sumSecondary = 0;
    for (const arr of arrays) {
        sumMain += arr[n];
        n++;
        sumSecondary += arr[m];
        m--;
    }
    console.log(`${sumMain} ${sumSecondary}`);
}
diagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]]);