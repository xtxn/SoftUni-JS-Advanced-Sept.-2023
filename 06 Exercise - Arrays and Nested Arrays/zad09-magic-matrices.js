function magicMike(arr) {
    let result = 0;
    let buff = 0;
    let isMagic = true;

    // find target number
    for (let i = 0; i < arr[0].length; i++) {
        result += arr[0][i];
    }

    // Checking all rows
    for (let i = 0; i < arr.length; i++) {
        buff = 0;
        for (let j = 0; j < arr[i].length; j++) {
            buff += arr[i][j];
        }
        if (result === buff) {
            continue;
        } else {
            isMagic = false;
        }
    }
    // Checking all columns
    for (let i = 0; i < arr[0].length; i++) {
        buff = 0;
        for (let j = 0; j < arr.length; j++) {
            buff += arr[j][i];
        }
        if (result === buff) {
            continue;
        } else {
            isMagic = false;
        }
    }
    console.log(isMagic);
}
magicMike([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);