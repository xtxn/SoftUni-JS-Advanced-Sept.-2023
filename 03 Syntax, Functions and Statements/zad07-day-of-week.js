function dayOfWeek(str) {
    let dayNum = ''
    switch (str) {
        case 'Monday': dayNum = 1;
            break;
        case 'Tuesday': dayNum = 2;
            break;
        case 'Wednesday': dayNum = 3;
            break;
        case 'Thursday': dayNum = 4;
            break;
        case 'Friday': dayNum = 5;
            break;
        case 'Saturday': dayNum = 6;
            break;
        case 'Sunday': dayNum = 7;
            break;
        default: dayNum = 0;
            break;
    }
    if (dayNum == 0) {
        console.log('error');
    } else {
        console.log(dayNum);
    }
}
dayOfWeek('Monday');