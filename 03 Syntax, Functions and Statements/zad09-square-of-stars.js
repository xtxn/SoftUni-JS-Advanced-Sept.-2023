function squareOfStars(num) {
    num = Number(num);
    if (isNaN(num) || num == '') {
        num = 5;
    }
    for (let i = 0; i < num; i++) {
        console.log('* '.repeat(num));
    }
}
squareOfStars();