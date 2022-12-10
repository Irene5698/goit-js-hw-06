const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryElement = document.querySelector(".gallery")

const imgElement = document.createElement('img');
imgElement.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
imgElement.alt = 'White and Black Long Fur Cat';
console.log(imgElement);

imgElement.insertAdjacentHTML("beforebegin", galleryElement);

console.log(galleryElement)



//const list = document.querySelector(".list");

//const newTechnologies = ["React", "TypeScript", "Node.js"];
//const markup = newTechnologies
 // .map((technology) => `<li class="list-item new">${technology}</li>`)
//  .join("");

//list.insertAdjacentHTML("beforeend", markup);
//list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//const imgElement = document.createElement('img');
//imgElement.src = 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//imgElement.alt = 'White and Black Long Fur Cat';
//console.log(imgElement);

//const imgElement = document.createElement('img');
//imgElement.src = 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//imgElement.alt = 'Orange and White Koi Fish Near Yellow Koi Fish';
//console.log(imgElement);

//const imgElement = document.createElement('img');
//imgElement.src = 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';
//imgElement.alt = 'Group of Horses Running';
//console.log(imgElement);

//const ItemElement = document.createElement("li")
//ItemElement.appendChild(imgElement)
//console.log(ItemElement)

//const galleryElement = document.querySelector(".gallery");
//galleryElement.appendChild(ItemElement);


//list.insertAdjacentHTML("beforeend", markup);