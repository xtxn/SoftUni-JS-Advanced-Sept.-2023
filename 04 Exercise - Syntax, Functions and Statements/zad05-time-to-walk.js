function timeToWalk(steps, footprintInMeters, speedInKm) {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let additionalBreaksTime = 0;
    let walkingDistanceInM = steps * footprintInMeters;
    let speedInMSec = speedInKm * 0.277778;
    let timeInSec = Math.round(walkingDistanceInM / speedInMSec);

    minutes = Math.floor(timeInSec / 60);

    if (minutes > 60) {
        hours++;
        minutes - 60;
    }
    seconds = timeInSec % 60;

    while (walkingDistanceInM > 500) {
        additionalBreaksTime += 1;
        walkingDistanceInM -= 500;
    }
    minutes += additionalBreaksTime;
    hours = hours.toString().padStart(2, 0)
    minutes = minutes.toString().padStart(2, 0)
    seconds = seconds.toString().padStart(2, 0)

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5);