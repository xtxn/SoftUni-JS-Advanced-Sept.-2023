function equalNeighbors(arrays) {
    let arrNum = arrays[0].length;
    let counter = 0;

    for (let i = 0; i < arrNum; i++) {
        let buff;
        for (let j = 0; j < arrays.length; j++) {
            buff = arrays[j][i];
            if (buff == arrays[j][i + 1]) {
                counter++
            }
            if (j < arrays.length - 1 && buff == arrays[j + 1][i]) {
                counter++
            }
        }
    }
    console.log(counter);
}

equalNeighbors(
    [[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]);
equalNeighbors(
    [['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]);
equalNeighbors(
    [['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]);