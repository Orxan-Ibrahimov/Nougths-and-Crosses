var currentPlayer = "X";
var won = false;

function place(box) {
  if (box.innerText != "" || won == true) return;
  box.innerText = currentPlayer;
if (currentPlayer == "X") {
    box.style.backgroundColor = "yellow";
    box.style.color = "navy";
} else {
    box.style.backgroundColor = "navy";
    box.style.color = "yellow";
}

checkGameBoard();

currentPlayer == "O" ? (currentPlayer = "X") : (currentPlayer = "O");

  //   if (currentPlayer == "O") currentPlayer = "X";
  //   else currentPlayer = "O";
}

function checkGameBoard() {
    for (let index = 0; index < 3; index++) {
        var first = document.getElementById("0_" + index);
        var second = document.getElementById("1_" + index);
        var third = document.getElementById("2_" + index);
        checkWinner(first,second,third);

        var colFirst = document.getElementById(index + "_0");
        var colSecond = document.getElementById(index + "_1");
        var colThird = document.getElementById(index + "_2");
        checkWinner(colFirst,colSecond,colThird);       
    }
  
    var fd = document.getElementById("0_0");
    var sd = document.getElementById("1_1");
    var td = document.getElementById("2_2");
    checkWinner(fd,sd,td);

    var fod = document.getElementById("2_0");
    var sod = document.getElementById("1_1");
    var tod = document.getElementById("0_2");
    checkWinner(fod,sod,tod);
}

function checkWinner(uno, dos,tres) {
    if (uno.innerText != "" && uno.innerText == dos.innerText && uno.innerText == tres.innerText) {        
    alert("Player " + currentPlayer + " won");
    uno.style.backgroundColor = "green";
    uno.style.color = "white";
    
    dos.style.backgroundColor = "green";
    dos.style.color = "white";

    tres.style.backgroundColor = "green";
    tres.style.color = "white";

    won = true;
    }
}