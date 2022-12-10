const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const list = document.getElementById("ingredients");
const oneItem = document.createElement("li");
oneItem.textContent = 'Potatoes';
oneItem.classList = ("item")

const twoItem = document.createElement("li");
twoItem.textContent = 'Mushrooms';
twoItem.classList = ("item")

const threeItem = document.createElement("li");
threeItem.textContent = 'Garlic';
threeItem.classList = ("item")

const forItem = document.createElement("li");
forItem.textContent = 'Tomatos';
forItem.classList = ("item")

const fiveItem = document.createElement("li");
fiveItem.textContent = 'Herbs';
fiveItem.classList = ("item")

const sixItem = document.createElement("li");
sixItem.textContent = 'Condiments';
sixItem.classList = ("item")


list.append(oneItem,twoItem,threeItem, forItem, fiveItem, sixItem )
console.log(list)
