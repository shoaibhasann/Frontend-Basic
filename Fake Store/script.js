const productSection = document.getElementById("products");

const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  }
  return str;
};

const fetchData = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();

    let productCardContent = "";

    for (let i = 0; i < data.length; i++) {
      let imageUrl = data[i].image;
      let title = truncateString(data[i].title, 20);
      let price = data[i].price;

      productCardContent += `<div class="productCard" data-id="${data[i].id}">
        <div class="productImage"><img src="${imageUrl}" alt="Product Image"></div>
        <div class="title">${title}</div>
        <div class="price">Price: ${price}</div>
        <button class="cart">Add to Cart</button>
      </div>`;
    }

    productSection.innerHTML = productCardContent;

    // Add event listener to add to cart buttons
    const cartBtns = document.querySelectorAll(".cart");

    cartBtns.forEach((cartBtn) => {
      cartBtn.addEventListener("click", (event) => {
        const productCard = event.target.closest(".productCard");

        if (productCard) {
          const imageUrl = productCard.querySelector(".productImage img").src;
          const title = productCard.querySelector(".title").textContent;
          const price = productCard.querySelector(".price").textContent;

          addToCart(imageUrl, title, price);
        }
      });
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

const addToCart = (imageUrl, title, price) => {
  const cartSection = document.getElementById("cartSection");

  let cartItemCard = `<div class="productCardItem">
    <div class="productImage"><img src="${imageUrl}" alt="Product Image"></div>
    <div class="title">${title}</div>
    <div class="price">Price: ${price}</div>
    <button class="cart">Buy</button>
  </div>`;

  cartSection.innerHTML += cartItemCard;
};

fetchData();

// Add event listener for displaying product on a different page



productSection.addEventListener("click", (event) => {
  const productCard = event.target.closest(".productCard");

  if (productCard) {
    const productId = productCard.getAttribute("data-id");

    // set the product id to the local storage
    localStorage.setItem("selectedProductId", productId);

    // Redirect to the single product page
    window.location.href = "single.html";
  }
});
