const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];


const list = document.querySelector('#ingredients');   
const ingredientsList = ingredients.map(element => {
  let item = document.createElement('li');
  item.className = 'item';
  item.textContent = element;
  return item;
});

list.append(...ingredientsList);
console.log(list)


