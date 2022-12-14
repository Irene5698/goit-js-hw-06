const form = document.querySelector(".login-form");

form.addEventListener("submit", onLoginForm);

function onLoginForm(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  let obj = {};
  formData.forEach((value, name) => {
    obj[name] = value;

    console.log(obj);

    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        alert("Всі поля повинні бути заповнені");
      }
    });
  });

  document.querySelector(".login-form").reset();
}
