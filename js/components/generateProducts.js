import { savedWishes, wishCounter } from "./wishFunctions.js";

export function generateProducts(products) {
  const selectedItems = savedWishes();
  wishCounter(parseInt(selectedItems.length));

  var innerHTML = "";
  products.forEach(function (product) {
    let className = "far";

    const exists = selectedItems.find(function (item) {
      return parseInt(item.id) === parseInt(product.id);
    });

    if (exists) {
      className = "fa";
    }

    innerHTML += `
    <div class="card">
    <div class="wishlist-container">
      <i class="${className} fa-heart" data-id="${product.id}" data-name="${product.title}" data-image="${product.image}" data-title="${product.title}" data-price="${product.price}" data-alt="product image of ${product.title}"></i>
    </div>
    <div class="card-img">
      <img src="${product.image}" alt="product image of ${product.title}">
    </div>
      <h3>${product.title}</h3>
      <p class="price">$ ${product.price}</p>
      <button>Add to Cart</button>
    </div>`;
  });

  return innerHTML;
}
