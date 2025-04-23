//   A user has 3 attempts to log in. Simulate failed login attempts using while. After 3, show "Account locked".
const loginAttempt = () => {
    let attempt = 1;
    while (attempt <= 3) {
        console.log(`Login attempt ${attempt}: Please input correct username and password.`);
        attempt++;
    };
    console.log("Account locked")
};
loginAttempt();

// Users are voting on a feature. Use do...while to log each vote from an array until all votes are processed.
const usersVotes = (votes) => {
    let i = 0;
    do {
        console.log(`Vote:${votes[i]}`);
        i++;
    }
    while (i < votes.length);
}
let votes = [1, 2, 3, 4, 5, 6];
usersVotes(votes);

// Loop through an array of numbers from 1–7 and use a switch to print the corresponding day name.
const numbersArray = (dayName) => {
    dayName.forEach((day) => {
        switch (day) {
            case 1:
                console.log('The day is Sunday');
                break;
            case 2:
                console.log('The day is Monday');
                break;
            case 3:
                console.log('The day is Tuesday');
                break;
            case 4:
                console.log('The day is Wednesday');
                break;
            case 5:
                console.log('The day is Thursday');
                break;
            case 6:
                console.log('The day is Friday');
                break;
            case 7:
                console.log('The day is Saturday');
                break;
            default:
                console.log('Day does not exist');

        };

    });
};
let dayName = [1, 2, 3, 4, 5, 6, 7, 23];
numbersArray(dayName);

// Given an array of password strings, use if...else to: log "Strong" if length >= 8, and "Weak" otherwise.
function passwordStrings(passwords) {
    passwords.forEach(password => {
        if (password.length >= 8) {
            console.log(`${password}:Strong`);
        }
        else {
            console.log(`${password}:weak`);
        };
    });
};
let passwords = ['@254kenya26', '675birethi', 'sha'];
passwordStrings(passwords);
// You're building a multilingual site. Use a switch to show greetings based on language codes. I.e "en" → "Hello", "fr" → "Bonjour", "sw" → "Habari".
function languageCodes(greetings) {
    greetings.forEach((greet) => {
        switch (greet) {
            case 'en':
                console.log('Hello');
                break;
            case 'fr':
                console.log('Bonjour');
                break;
            case 'sw':
                console.log('Habari');
            default:
                console.log('Language does not exist');
        };
    });
};
let greetings = ["en", "fr", "sw", "sha"];
languageCodes(greetings);
// You're building a weather dashboard. Loop through an array of temperatures and: If above 30, log "High heat alert!", else if below 15, log "Cold alert!", else, log "Normal conditions"
const arrayOfTemperatures = (temperatures) => {
    temperatures.forEach(temperature => {
        if (temperature > 30) {
            console.log(`${temperature}:High heat alert!`);
        }
        else if (temperature < 15) {
            console.log(`${temperature}:Cold Alert`);
        }
        else {
            console.log(`${temperature}:Normal conditions`);
        }

    });
};
let temperatures = [15, 23, 56, 78, 98, 13]
arrayOfTemperatures(temperatures);

// Users are queued to register. Use a while loop to remove and print each name until the queue is empty.
let users = ["Fiona", "Jabal", "Bravin", "Lisa", "Emu"];
function userRegistrationList(users) {
    while (users.length > 0) {
        let names = users.shift();
        console.log(`Register:${names}`);
    };
    console.log(users)
};
userRegistrationList(users);
// Students retake a test until they score 50 or more. Use do...while to simulate attempts, increasing the score by 10 each time until it's >= 50.
function retakeAttempts(scores) {
    scores.forEach(score => {
        let attempt = 0;
        do {
            score += 10;
            attempt++;
            console.log(`Attempt ${attempt}: Score = ${score}`);


        }
        while (score < 50);
    });

}
retakeAttempts([2, 4, 6, 9, 0]);