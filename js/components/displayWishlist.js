import { savedWishes, wishCounter } from "./wishFunctions.js";
import { generateProducts } from "./generateProducts.js";
import { displayMessage } from "./message.js";

export function displayWishlist() {
  const resultContainer = document.querySelector(".product-container");

  const wishItems = savedWishes();

  if (wishItems.length === 0) {
    displayMessage(
      ".message",
      "There are currently no items in your wishlist!",
      ".product-container"
    );
  } else {
    resultContainer.innerHTML = generateProducts(wishItems);
    wishCounter(wishItems.length);
  }
}

displayWishlist();
