function getName(){
    let userName = prompt("Please type your name: ");
    while (userName == "") {
        userName = prompt("That's not right. Try typing your name in again: ");
    }
    document.write("Hello, " + userName + " and welcome to We Love Dogs!");
    return userName;
}


function getDogInterest() {
    let result = 0;
    let userDogResponse = prompt("Do you like dogs?");
    do {
        if (userDogResponse == 'yes' || userDogResponse == 'y' || userDogResponse == 'YES') {
            document.write("...and so do you!");
            result = 1;
        }
        else if (userDogResponse == 'no' || userDogResponse == 'n' || userDogResponse == 'NO') {
            document.write("...but you don't...");
            result = 1;
        } else {
            userDogResponse = prompt("Wait that's not right. Try again using yes or no!");
        }
    } while (result == 0);
}


function getDogPref() {
    let preference = 0;
    let dogType = prompt("Do you like small dogs or large dogs?");
    do {
        if (dogType == 'large' || dogType == 'large dogs' || dogType == 'largedogs') {
            document.getElementById("ldog").style.color = "gold";
            preference = 1;
        }
        else if (dogType == 'small' || dogType == 'small dogs' || dogType == 'smalldogs') {
            document.getElementById("sdog").style.color = "gold";
            preference = 1;
        } else {
            dogType = prompt("Wait that's not right. Try answering again using 'small dogs' or 'large dogs': ");
    }   
    } while (preference == 0);
}

function rating() {
    let userRating = prompt("What would you rate this site? (1-5): ");
    let ratingNum = parseInt(userRating, 10);
    while (ratingNum < 1 || ratingNum > 5) {
        userRating = prompt("So you decided to use a different number.... Lets try again: Please pick a rating between 1 and 5: ");
        ratingNum = parseInt(userRating, 10);
    }
    for (let i = 0; i < ratingNum; i++) {
        document.write('<img src="goldstar.jpg"/>');
    }
}   