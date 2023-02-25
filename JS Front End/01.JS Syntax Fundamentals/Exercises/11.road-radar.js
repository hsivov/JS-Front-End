function solve(speed, area) {
    let status;

    switch (area) {
        case 'motorway':
            printResult(speed, 130);
            break;
        case 'interstate':
            printResult(speed, 90);
            break;
        case 'city':
            printResult(speed, 50);
            break;
        case 'residential':
            printResult(speed, 20);
            break;
    }

    function printResult(speed, speedLimit) {
        if (speed <= speedLimit) {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
        } else {
            let difference = speed - speedLimit;
            if (difference <= 20) {
                status = 'speeding';
            } else if (difference <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving'
            }
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
        }
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');
solve(200, 'motorway');