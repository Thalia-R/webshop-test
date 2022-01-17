import { api } from "./constants/api.js";
import { displayProducts } from "./components/display.js";
import { searchFilter } from "./components/searchFilter.js";
import { priceFilter } from "./components/priceFilter.js";
import { displayMessage } from "./components/message.js";

async function getProducts() {
  try {
    const response = await fetch(api);
    const json = await response.json();

    const products = json;

    displayProducts(products);
    searchFilter(products);
    priceFilter(products);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
}

getProducts();
