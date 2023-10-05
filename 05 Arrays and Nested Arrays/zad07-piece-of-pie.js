function pieceOfPie(arr, flavor1, flavor2) {
    let idx1 = arr.indexOf(flavor1);
    let idx2 = arr.indexOf(flavor2) + 1;
    let newArr = arr.slice(idx1, idx2);

    return newArr;
}
pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie');