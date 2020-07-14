var currentPlayer;
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var column1 = ["00", "10", "20", "30", "40", "50"];
var column2 = ["01", "11", "21", "31", "41", "51"];
var column3 = ["02", "12", "22", "32", "42", "52"];
var column4 = ["03", "13", "23", "33", "43", "53"];
var column5 = ["04", "14", "24", "34", "44", "54"];
var column6 = ["05", "15", "25", "35", "45", "55"];
var column7 = ["06", "16", "26", "36", "46", "56"];

function fillBall(event, column) {
  if (currentPlayer === undefined) {
    alert("Please select any player first");
  } else {
    var targetCell = column[column.length - 1].toString();
    column.pop();
    document.getElementById(targetCell).innerHTML = currentPlayer.innerHTML;
    console.log("Fill", event);
  }
}

function setPlayer(playerid) {
  player1.style.backgroundColor = null;
  player2.style.backgroundColor = null;
  currentPlayer = document.getElementById(playerid);
  currentPlayer.style.backgroundColor = "red";
}
