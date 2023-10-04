function sumFirstLast(arr) {
    let sum = 0;
    if (arr.length == 1) {
        sum == Number(arr[0]);
    } else {
        sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    }
    console.log(sum);
}
sumFirstLast(['20', '30', '40'])