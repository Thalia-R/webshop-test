import { savedWishes, saveWishes } from "./wishFunctions.js";
import { generateProducts } from "./generateProducts.js";

export function displayProducts(products) {
  const resultsContainer = document.querySelector(".product-container");

  resultsContainer.innerHTML = generateProducts(products);

  const heartIcon = document.querySelectorAll(".card i");

  heartIcon.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  function handleClick(event) {
    event.target.classList.toggle("fa");
    event.target.classList.toggle("far");

    const id = this.dataset.id;

    const currentWishes = savedWishes();

    const productExists = currentWishes.find(function (key) {
      return key.id === id;
    });

    if (productExists === undefined) {
      const product = JSON.parse(JSON.stringify(this.dataset));

      currentWishes.push(product);
      saveWishes(currentWishes);
    } else {
      const newProduct = currentWishes.filter((key) => key.id !== id);
      saveWishes(newProduct);
    }
  }
}
