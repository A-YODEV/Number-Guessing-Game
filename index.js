let userName = prompt("Please enter your username? ")

if (userName) {
  console.log(`${userName} welcome to our number guessing game. You have 10 rounds of guessing between 1 & 2. let's see how many points you can make....`);
}

let points = 0

for (let i = 0; i < 10; i++) {
  let rndmNum = Math.floor (Math.random() * 2) + 1
 // console.log(rndmNum)
  let userNum = prompt("Please enter a number between 1 & 2: ")
  if (rndmNum === parseInt(userNum)) {
    points++;
    console.log("You guessed right, go again!")
  } else {
    console.log("Please try again")
  } 
}

console.log(`Congrats! ${userName} you have won ${points} points`)