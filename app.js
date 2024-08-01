let dice1 = 1;
let dice2 = 1;
const button = document.querySelector("button");

const Dice = {
  sides: 6,
  roll: function () {
    const diceResult = Math.floor(Math.random() * this.sides) + 1;
    return diceResult;
  },
};

const rollDice = () => {
  dice1 = Dice.roll();
  dice2 = Dice.roll();

  renderDices();
  renderResults();
};

const renderDices = () => {
  const diceImg1 = document.querySelector(".img1");
  const diceImg2 = document.querySelector(".img2");

  if (diceImg1 && diceImg2) {
    diceImg1.src = `./images/dice${dice1}.png`;
    diceImg2.src = `./images/dice${dice2}.png`;
  } else {
    console.error("Dice images not found");
  }
};

const renderResults = () => {
  let result = document.querySelector(".result");

  if (result) {
    if (dice1 > dice2) {
      return (result.textContent = `Player 1 wins!`);
    }

    if (dice1 < dice2) {
      return (result.textContent = `Player 2 wins!`);
    }

    if (dice1 === dice2) {
      return (result.textContent = `It's a draw!`);
    }
  } else {
    console.error(`Could not found the results element`);
  }
};

button.addEventListener("click", rollDice);

rollDice();
