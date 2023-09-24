function roadRadar(speed, type) {
    let speedLimit = 0;
    let status = '';
    switch (type) {
        case 'residential': speedLimit = 20;
            break;
        case 'city': speedLimit = 50;
            break;
        case 'interstate': speedLimit = 90;
            break;
        case 'motorway': speedLimit = 130;
            break;
    }
    let difference = speed - speedLimit;
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference <= 40) {
        status = 'excessive speeding'
    } else {
        status = 'reckless driving'
    }

    if (speed > speedLimit) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status} `);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}
roadRadar(200, 'motorway');