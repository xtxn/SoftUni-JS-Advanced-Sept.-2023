function addRemoveElem(arr) {
    let result = 1;
    let newArr = [];

    for (const el of arr) {
        switch (el) {
            case 'add': newArr.push(result);
                result++;
                break;
            case 'remove': newArr.pop();
                result++;
                break;
        }
    }

    if (newArr.length > 0) {
        newArr.forEach((a) => console.log(a));
    } else {
        console.log('Empty');
    }
}
addRemoveElem(['add',
    'add',
    'add',
    'add']);