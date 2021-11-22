function genRand(num) {
    return Math.floor(Math.random() * num);
}

// Determine birth month

const monthMaybe = genRand(13);
let month;

switch (monthMaybe) {
    case 1:
        month = "Janurary";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
    case 8:
        month = "August";
        break;
    case 9:
        month = "September";
        break;
    case 10:
        month = "October";
        break;
    case 11:
        month = "November";
        break;
    case 12:
        month = "December";
        break;
    default:
        month = null;
        break;
}

// Determine handedness

const handedMaybe = genRand(4);
let handedness;

if (handedMaybe === 1) {
    handedness = "right";
}
else if (handedMaybe === 2) {
    handedness = "left";
}
else if (handedMaybe === 3) {
    handedness = "ambidextrous";
}
else {
    handedness = null;
}

// Determine length of name and set name

const catPersonMaybe = genRand(3);
let catPerson;

switch (catPersonMaybe) {
    case 1:
        catPerson = true;
        break;
    case 2:
        catPerson = false;
        break;
    default:
        catPerson = null;
        break;
}

