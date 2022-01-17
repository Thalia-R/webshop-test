import { displayProducts } from "./display.js";
import { displayMessage } from "./message.js";

export function priceFilter(products) {
  const price = document.querySelector("input[type='number']");

  price.onkeyup = function (event) {
    const priceInput = event.target.value;

    if (priceInput) {
      const filterPrice = products.filter(function (item) {
        if (item.price <= priceInput) {
          return true;
        }
      });

      if (filterPrice.length == 0) {
        return displayMessage(
          ".message",
          "No products found...",
          ".product-container"
        );
      }
      displayProducts(filterPrice);
    } else {
      displayProducts(products);
    }
  };
}
