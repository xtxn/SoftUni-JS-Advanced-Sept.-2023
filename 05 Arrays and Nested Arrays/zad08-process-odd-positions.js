function processOddPos(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            newArr.push(arr[i]);
        }
    }
    newArr = newArr.map((x) => x * 2).reverse();
    console.log(newArr);
}
processOddPos([3, 0, 10, 4, 7, 3])