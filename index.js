var currentPlayer;
var nextPlayer;
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
    var targetCell = column[column.length - 1];
    column.pop();
    document.getElementById(targetCell).innerHTML = currentPlayer.innerHTML;
    nextPlayer = currentPlayer.innerHTML === 'Player1' ? 'player2': 'player1';
    this.checkHorizontalWins();
    this.setPlayer(nextPlayer);
    console.log("Fill", event);
  }
}

function setPlayer(playerid) {
  player1.style.backgroundColor = null;
  player2.style.backgroundColor = null;
  currentPlayer = document.getElementById(playerid);
  currentPlayer.style.backgroundColor = "red";
}

function createTable(row, column) {
  var grid = document.getElementById('grid');
  var table = document.createElement('table');
  var tbody = document.createElement('tbody');
  table.style.width = '100%';
  for (var i = 0; i < row; i++) {
    var tr = document.createElement('tr');
    tr.setAttribute("class", "row");
    for (var j = 0; j < column; j++) {
        var td = document.createElement('td');
        td.setAttribute("id", `${i}${j}`);
        td.setAttribute("class", 'cell col-md-1');
        tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  grid.appendChild(table);
}
createTable(6, 7);

function checkHorizontalWins() {
    var gridElement = document.getElementById('grid');
    var gridCells = gridElement.getElementsByClassName('cell');
    let rows = [0, 6, 13, 20, 27, 34];
    for(let row of rows) {
        for(let i=row; i<row+4; i++) {
          count = 0;
            for(let j=i+1; j<i+4; j++) {
                console.log(i,gridCells[i],gridCells[i].innerHTML, gridCells[j], gridCells[j].innerHTML);
                if(gridCells[i].innerHTML === ('Player1' || 'Player2') && gridCells[i].innerHTML === gridCells[j].innerHTML) {
                    count++;
                    console.log(count);
                    if(count === 4) {
                        alert('Player wins', gridCells[i].innerHTML);
                    }
                }
            }
        }
    }
}
