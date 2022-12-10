const refs = {
input: document.querySelector("#name-input"),
output: document.querySelector("#name-output")
    
}


/* input.addEventListener("focus", onInputFocus)
input.addEventListener("blur", onInputblur)

function onInputFocus() {
  console.log("focus")
}
function onInputblur() { 
    console.log("blur")
} */


refs.input.addEventListener("input", onInputChange)

function onInputChange(event) {
console.log(event.currentTarget.value);
refs.output.textContent = event.currentTarget.value;

if("input" === "") {
    output === "Anonymous"
}
  }


