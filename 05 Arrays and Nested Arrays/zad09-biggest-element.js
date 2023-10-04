function biggestElem(arrays) {
    let concArr = [];
    for (const arr of arrays) {
        concArr = concArr.concat(arr);
    }
    concArr.sort((a, b) => a - b);
    console.log(concArr[concArr.length - 1]);
}
biggestElem([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])