let inputPlayer1 = document.getElementById("player1") as HTMLInputElement | null;
let inputPlayer2 = document.getElementById("player2") as HTMLInputElement | null;

function displayResult() {
  let value1 = inputPlayer1?.value;
  let value2 = inputPlayer2?.value;
  let player1: number = Number(value1);
  let player2: number = Number(value2);
  let randomNumber = Math.floor(Math.random() * 99 + 1);

  let comparisonPlayer1 = Math.abs(randomNumber - player1);
  let comparisonPlayer2 = Math.abs(randomNumber - player2);
  if (player1 == randomNumber) {
    alert("Ha vinto il player 1, ha azzeccato il numero: " + randomNumber);
  } else if (player2 == randomNumber) {
    alert("Ha vinto il player 2");
  } else if (comparisonPlayer1 < comparisonPlayer2) {
    alert("Nessuno dei due si è avvicinato, ma il player 1 si è avvicinato di piu al numero: " + randomNumber);
  } else if (comparisonPlayer1 > comparisonPlayer2) {
    alert("Nessuno dei due si è avvicinato, ma il player 2 si è avvicinato di piu al numero: " + randomNumber);
  } else {
    alert("Valore inserito non valido");
  }
}
