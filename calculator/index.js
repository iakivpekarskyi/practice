const inputA = document.querySelector(".js-input-a");
const inputB = document.querySelector(".js-input-b");
const selectO = document.querySelector(".js-select");
const btn = document.querySelector(".js-btn-result");
const output = document.querySelector(".js-output");

btn.addEventListener("click", function () {
  const a = Number(inputA.value);

  const b = Number(inputB.value);

  const operation = selectO.value;

  const result = calculate({ a, b, operation });
  console.log(result);

  output.innerHTML = result;
});
