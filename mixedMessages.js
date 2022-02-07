function genRand(num) {
    return Math.floor(Math.random() * num);
}

// Declare person object
let person = {
    intro() {
        return `I am born in ${this.birthMonth}, I am ${handedness} handed and am I a cat person? ${catPerson}`;
    }
};

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
        month = "Unknown";
        break;
}

// Determine handedness

const handedMaybe = genRand(3);
let handedness;

switch (handedMaybe) {
    case 0:
        handedness = "right";
        break;
    case 1:
        handedness = "left";
        break;
    case 2:
        handedness = "ambidextrous";
        break;
    default:
        handedness = "unknown";
        break;
}
// Determine length of name and set name

const catPersonMaybe = genRand(3);
let catPerson;

switch (catPersonMaybe) {
    case 0:
        catPerson = true;
        break;
    case 1:
        catPerson = false;
        break;
    case 2:
        catPerson = "unknown";
        break;
    default:
        catPerson = null;
        break;
}

person.birthMonth = month;
person.hand = handedness;
person.cat = catPerson;

console.log(person.intro());
console.log("This is stoopid");
