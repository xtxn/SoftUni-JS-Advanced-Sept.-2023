function cookingByNums(num1, li1, li2, li3, li4, li5) {
    num1 = Number(num1);
    let operations = [li1, li2, li3, li4, li5];
    for (const el of operations) {
        switch (el) {
            case 'chop': num1 /= 2;
                console.log(num1);
                break;
            case 'dice': num1 = Math.sqrt(num1);
                console.log(num1);
                break;
            case 'spice': num1 += 1;
                console.log(num1);
                break;
            case 'bake': num1 *= 3;
                console.log(num1);
                break;
            case 'fillet': num1 -= 0.2 * num1;
                console.log(num1);
                break;
        }
    }
}
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');