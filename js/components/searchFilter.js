import { displayProducts } from "./display.js";
import { displayMessage } from "./message.js";

export function searchFilter(products) {
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    console.log(event);
    const searchValue = event.target.value.trim().toLowerCase();

    const filterSearch = products.filter(function (item) {
      if (item.title.toLowerCase().startsWith(searchValue)) {
        return true;
      }
    });

    if (filterSearch.length === 0) {
      displayMessage(
        ".message",
        "Sorry! No products found.",
        ".product-container"
      );
    } else {
      displayProducts(filterSearch);
    }
  };
}
