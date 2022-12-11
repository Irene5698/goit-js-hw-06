const refs = {
  input: document.getElementById("font-size-control"),
  span: document.getElementById("text"),
};

refs.input.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  refs.span.style.fontSize = event.currentTarget.value + "px";
}
