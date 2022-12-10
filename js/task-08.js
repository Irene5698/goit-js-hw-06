const form = document.querySelector (".login-form")

form.addEventListener("submit", onLoginForm);

function onLoginForm (event) {
event.preventDefault();

const formData =  new FormData(event.currentTarget);

  console.log(formData);
  
  formData.forEach((value, name) => {
    console.log(`name`, name );
    console.log(`value`, value);

  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
      if (input.value.trim() === '') { 
      alert("Всі поля повинні бути заповнені")
      }
  })

  });
  
  document.querySelector(".login-form").reset();

}


