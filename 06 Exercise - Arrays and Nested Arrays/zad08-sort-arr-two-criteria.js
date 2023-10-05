function sortArrByTwoCriteria(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    for (const el of arr) {
        console.log(el);
    }
}
sortArrByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);