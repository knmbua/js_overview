const firstName = "Kandyce";
let age = 18;

// If age is greater than 20 and less than 50, console log 'you are young'

// IF age is greater than or equal to 50, console log 'you are getting older'

// If age is less than 20 and greater than 12, console log 'you are a teenager'

if (age > 20 && age < 50) {
    console.log("you are young");
} else if (age >= 50){
    console.log ("you are  getting older");
} else if (age <20 && age >12) {
    console.log("you are a teenager");
} else{
    console.log("your age is not within our range");
}
