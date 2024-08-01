let dice1;
let dice2;
const button = document.querySelector("button");

const dice = {
  sides: 6,
  roll: function () {
    const diceResult = Math.floor(Math.random() * this.sides) + 1;
    return diceResult;
  },
};

const rollDice = () => {
  dice1 = dice.roll();
  dice2 = dice.roll();

  renderDices();
  renderResults();
};

const rollAgain = () => {
  rollDice();
};

const renderDices = () => {
  const diceImg1 = document.querySelector(".img1");
  const diceImg2 = document.querySelector(".img2");

  diceImg1.src = `./images/dice${dice1}.png`;
  diceImg2.src = `./images/dice${dice2}.png`;
};

const renderResults = () => {
  let result = document.querySelector(".result");

  if (dice1 > dice2) {
    return (result.textContent = `Player 1 wins!`);
  }

  if (dice1 < dice2) {
    return (result.textContent = `Player 2 wins!`);
  }

  if (dice1 === dice2) {
    return (result.textContent = `It's a draw!`);
  }
};

button.addEventListener("click", rollAgain);

rollDice();
