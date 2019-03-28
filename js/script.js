confirm("Are you ready to play?");

var age = prompt("What's your age?");
if(age < 13) {
  console.log("You are allowed to play, but I take no responsibilty for you.");
} else {
  console.log("You can play. Have fun!");
}

console.log("You are at Justin Bieber concert, and you hear this lyric 'Lace my shoes off, star racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");

var userAnswer = prompt("Do you want to race Biber on strage?");

if(userAnswer === "yes") {
  console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
} else {
  console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Thank you! We should race at the next concert!");

if (feedback > 8){
  console.log("Thank you! We should race at the next concert!");
} else {
  console.log("I'll keep practicing coding and racing.");
}
