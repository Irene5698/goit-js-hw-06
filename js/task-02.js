const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

for (let i = 0; i < ingredients.length; i++){
  let list = document.createElement('li');
  list.innerText=ingredients[i];
   document.querySelector("#ingredients").appendChild(list);
   list.classList = ("item")
}

console.log(list)





