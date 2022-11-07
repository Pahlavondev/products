const productsListEl = document.querySelector(".products-list");
const loaderEl = document.querySelector(".loader");

window.onload = function () {
  loaderEl.classList.add("hide");
};

(async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  renderProducts(data);
})();

function renderProducts(data) {
  data.forEach((element) => {
    const productsEl = `
        <li class="products-item">
          <img class="products-image" src="${element.image}" alt="" />
          <h2 class="products-title"><strong>Price:</strong> ${element.price}</h2>
          <span class="products-span"><strong>Count:</strong> ${element.rating.count}</span>
          <p class="products-text"><Strong>Desc:</Strong> ${element.description}</p>
          <h3 class="products-name"><Strong>Name:</Strong> ${element.title}</h3>
          <i class="fa-solid fa-trash-can icon"></i>
        </li>
      `;

    productsListEl.innerHTML += productsEl;
  });

  const deleteIcon = document.querySelectorAll(".icon");
  deleteIcon.forEach((item) => {
    item.addEventListener("click", () => {
      let isDel = confirm("Bu elementni o'chirishga ishonchingiz komilmi?");
      if (isDel) {
        alert("Element o'chdi!!!");
      } else {
        alert("Element o'chmadi!!!");
      }
    });
  });
}
