const dogYears = function(planet, seconds) {
    switch (planet) {
        case 'earth':
            return Math.round(seconds / 31557600*7*100)/100;
        case 'mercury':
            return Math.round(seconds / 7600520.8*7*100)/100;
        case 'venus':
            return Math.round(seconds / 19414149.6*7*100)/100;
        case 'mars':
            return Math.round(seconds / 59354032.8*7*100)/100;
        case 'jupiter':
            return Math.round(seconds / 374355659.2*7*100)/100;
        case 'saturn':
            return Math.round(seconds / 929292362.88*7*100)/100;
        case 'uranus':
            return Math.round(seconds / 2651370019.2*7*100)/100;
        case 'neptune':
            return Math.round(seconds / 5200418560*7*100)/100;
    }
}