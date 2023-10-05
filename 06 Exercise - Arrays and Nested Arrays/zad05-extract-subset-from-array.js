function substractSubset(arr) {
    let biggest = 0;
    let newArr = [];
    for (const el of arr) {
        if (el >= biggest) {
            newArr.push(el);
            biggest = el;
        }
    }
    return newArr;
}
substractSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24])