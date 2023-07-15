// single-product.js

const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
};

document.addEventListener("DOMContentLoaded", () => {
  // Retrieve the selected product ID from localStorage
  const selectedProductId = localStorage.getItem("selectedProductId");

  // Retrieve the product details from the API using the selected product ID
  fetch(`https://fakestoreapi.com/products/${selectedProductId}`)
    .then((response) => response.json())
    .then((productData) => {
      // Populate the single product page with the product details
      const productImage = document.querySelector("#productImage img");
      const productTitle = document.querySelector("#title");
      const productPrice = document.querySelector("#price");
      const title = truncateString(productData.title,15);

      productImage.src = productData.image;
      productTitle.textContent = title;
      productPrice.textContent = `Price: ${productData.price}`;
    })
    .catch((error) => {
      console.log("Error:", error);
    });
});
