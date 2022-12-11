const wrap_button = {
  addClikcBtn: document.querySelector("[data-action='increment']"),
  removeClickBtn: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
  wrapper: document.querySelector("#counter"),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById("value").textContent = counterValue;
};
wrap_button.addClikcBtn.addEventListener("click", increment);
wrap_button.removeClickBtn.addEventListener("click", decrement);
