// Initialize Firebase
var config = {
  apiKey: "AIzaSyC--nQXvJHFPNw-8DFSd8jNsrJmVxxXtco",
  authDomain: "rock-paper-scissors-b4876.firebaseapp.com",
  databaseURL: "https://rock-paper-scissors-b4876.firebaseio.com",
  projectId: "rock-paper-scissors-b4876",
  storageBucket: "rock-paper-scissors-b4876.appspot.com",
  messagingSenderId: "281434002324"
};
firebase.initializeApp(config);

var database = firebase.database();

var playerOneChoice = "";
var playerTwoChoice = "";





$('#rock').on('click', function() {
  event.preventDefault();
  playerOneChoice = 'r';
  console.log(playerOneChoice);

  database.ref().push({
    playerOneChoice: playerOneChoice
  })
})

$('#paper').on('click', function() {
  event.preventDefault();
  playerOneChoice = 'p';
  console.log(playerOneChoice);

  database.ref().push({
    playerOneChoice: playerOneChoice
  })
})

$('#scissors').on('click', function() {
  event.preventDefault();
  playerOneChoice = 's';
  console.log(playerOneChoice);

  database.ref().push({
    playerOneChoice: playerOneChoice
  })
})


$('#rock2').on('click', function() {
  event.preventDefault();
  playerTwoChoice = 'r';
  console.log(playerTwoChoice);

  database.ref().push({
    playerTwoChoice: playerTwoChoice
  })
})

$('#paper2').on('click', function() {
  event.preventDefault();
  playerTwoChoice = 'p';
  console.log(playerTwoChoice);

  database.ref().push({
    playerTwoChoice: playerTwoChoice
  })
})

$('#scissors2').on('click', function() {
  event.preventDefault();
  playerTwoChoice = 's';
  console.log(playerTwoChoice);

  database.ref().push({
    playerTwoChoice: playerTwoChoice
  })
})




// Our array of possible computer choices.
var computerChoices = ["r", "p", "s"];

// Variables for tracking our wins, losses and ties. They begin at 0.
var wins = 0;
var losses = 0;
var ties = 0;

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

  // Determine which key was pressed
  var userGuess = event.key;

  // Sets the computerGuess variable equal to a random choice from the computerChoice array.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // If the user presses "r" or "p" or "s", run the game logic.
  if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate counter.
    if ((userGuess === "r") && (computerGuess === "s")) {
      wins++;
    }
    else if ((userGuess === "r") && (computerGuess === "p")) {
      losses++;
    }
    else if ((userGuess === "s") && (computerGuess === "r")) {
      losses++;
    }
    else if ((userGuess === "s") && (computerGuess === "p")) {
      wins++;
    }
    else if ((userGuess === "p") && (computerGuess === "r")) {
      wins++;
    }
    else if ((userGuess === "p") && (computerGuess === "s")) {
      losses++;
    }
    else if (userGuess === computerGuess) {
      ties++;
    }

    // Here we create the HTML that will be injected into our div and displayed on the page.
    var html = "<p>Press r, p or s to start playing!</p>" +
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>ties: " + ties + "</p>";

    // Injecting the HTML we just created into our div and updating the game information on our page.
    document.getElementById("game").innerHTML = html;

  }
};
