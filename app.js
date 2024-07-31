let rollDice1 = Math.floor(Math.random() * 6) + 1;
let rollDice2 = Math.floor(Math.random() * 6) + 1;
const button = document.querySelector('button')


function renderDices() {
  const dice1 = document.querySelector(".img1");
  const dice2 = document.querySelector(".img2");

  dice1.src = `./images/dice${rollDice1}.png`;
  dice2.src = `./images/dice${rollDice2}.png`;
}

function renderResults() {
  let result = document.querySelector(".result");

  if (rollDice1 > rollDice2) {
    return (result.textContent = `Player 1 wins!`);
   //  return (result.innerHTML = `&#128681 Player 1 wins!`);
  }

  if (rollDice1 < rollDice2) {
    return (result.textContent = `Player 2 wins!` );
   //  return (result.innerHTML = `Player 2 wins! &#128681` );
  }

  if (rollDice1 === rollDice2) {
    return (result.textContent = `It's a draw!`);
  }
}


button.addEventListener('click', () => {
  location.reload()
})


renderDices();
renderResults();
