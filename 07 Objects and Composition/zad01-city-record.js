function cityRecord(city, population, treasury) {
    let obj = {};
    obj['name'] = city;
    obj['population'] = population;
    obj['treasury'] = treasury;

    return obj;
}
cityRecord('Tortuga',
    7000,
    15000)