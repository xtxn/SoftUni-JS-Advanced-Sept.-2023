function townPopulation(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        let [town, population] = arr[i].split(' <-> ');
        population = Number(population)
        if (obj.hasOwnProperty(town)) {
            obj[town] += population;
        } else {
            obj[town] = population;
        }
    }
    let keys = Object.keys(obj)
    for (const key of keys) {
        console.log(`${key} : ${obj[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])