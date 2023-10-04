function biggerHalf(arr) {
    let newArr = [];
    let length = Math.floor(arr.length / 2);
    arr.sort((a, b) => a - b);

    for (let i = length; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr);
}
biggerHalf([4, 7, 2, 5]);