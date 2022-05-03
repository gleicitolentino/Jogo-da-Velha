
let player, winner = null;
let selectedPlayer = document.getElementById('selectPlayer');
let winnerPlayer = document.getElementById('winnerPlayer');
/*let square = document.getElementsByClassName('square');*/

changePlayer('X');

function chooseSquare(id) {


  let square = document.getElementById(id);
  if (square.innerHTML !== '-') {
    return;
  }
  square.innerHTML = player;
  square.style.color = '#000';

  if (player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
  changePlayer(player);
  checkWinner();
}

function changePlayer(valor) {
  player = valor;
  selectedPlayer.innerHTML = player;
}

function checkWinner() {
  const square1 = document.getElementById(1);
  const square2 = document.getElementById(2);
  const square3 = document.getElementById(3);
  const square4 = document.getElementById(4);
  const square5 = document.getElementById(5);
  const square6 = document.getElementById(6);
  const square7 = document.getElementById(7);
  const square8 = document.getElementById(8);
  const square9 = document.getElementById(9);

  if (checkSequence(square1, square2, square3)) {
    changeSquareColor(square1, square2, square3);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square4, square5, square6)) {
    changeSquareColor(square4, square5, square6);
    changeWinner(square4);
    return;
  }

  if (checkSequence(square7, square8, square9)) {
    changeSquareColor(square7, square8, square9);
    changeWinner(square7);
    return;
  }

  if (checkSequence(square1, square4, square7)) {
    changeSquareColor(square1, square4, square7);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square2, square5, square8)) {
    changeSquareColor(square2, square5, square8);
    changeWinner(square2);
    return;
  }

  if (checkSequence(square3, square6, square9)) {
    changeSquareColor(square3, square6, square9);
    changeWinner(square3);
    return;
  }

  if (checkSequence(square1, square5, square9)) {
    changeSquareColor(square1, square5, square9);
    changeWinner(square1);
    return;
  }

  if (checkSequence(square3, square5, square7)) {
    changeSquareColor(square3, square5, square7);
    changeWinner(square3);
  }
}

function changeWinner(square) {
  winner = square.innerHTML;
  winnerPlayer.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3) {
  square1.style.background = '#0f0';
  square2.style.background = '#0f0';
  square3.style.background = '#0f0';
}

function checkSequence(square1, square2, square3) {
  let equals = false;

  if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
    equals = true;
  }
  return equals;
}

function restart() {
  winner = null;
  winnerPlayer.innerHTML = '';

  for (let i = 1; i <= 9; i++) {
      let square = document.getElementById(i);
      square.style.background = '#eee';
      square.style.color = '#eee';
      square.innerHTML = '-';
  }

  changePlayer('X');
}