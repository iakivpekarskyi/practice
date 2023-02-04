const CURRENT_YEAR = 2023;
const CORRECT_ANSWER = "Correct";
const WRONG_ANSWER = "Sorry";

const inputN = document.querySelector(".js-input");
const btnN = document.querySelector(".js-btn");
const outputN = document.querySelector(".js-output");

btnN.addEventListener("click", function () {
  const inputValue = inputN.value;

  if (!inputValue) {
    return;
  }

  const answer = Number(inputN.value);
  let output = CORRECT_ANSWER;
  if (answer !== CURRENT_YEAR) {
    output = WRONG_ANSWER;
  }

  outputN.innerHTML = output;
});
