function sameNums(input) {
    let isSame;

    input = input.toString();
    let arr = input.split('');

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[0]) {
            isSame = true;
        } else {
            isSame = false;
            break;
        }
    }
    if (isSame) {
        console.log(true);
    } else {
        console.log(false);
    }
    console.log(arr.reduce((a, b) => Number(a) + Number(b)));
}
sameNums(2222222);