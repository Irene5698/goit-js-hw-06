const categoryEl = document.getElementsByTagName("h2");
console.log(`Number of categories: ${categoryEl.length}`);
for (let i = 0; i < 3; i++) {
  console.log(
    `Category: ${document.getElementsByTagName("h2")[i].textContent}`
  );
  console.log(
    `Elements: ${
      document.getElementsByTagName("ul")[i + 1].getElementsByTagName("li")
        .length
    }`
  );
}
