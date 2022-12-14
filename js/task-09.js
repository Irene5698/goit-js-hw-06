const refs = {
  color: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color")
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


refs.buttonChangeColor.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.color.textContent = getRandomHexColor();

      console.log('click');
      console.log(getRandomHexColor());
    })

    
