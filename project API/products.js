
const productContainer = document.querySelector("main");

// Vars
const productId = localStorage.getItem("productId");

// Functions
function getProduct() {
  if (productId) {
    fetch(`https://dummyjson.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => displayProduct(data));
  }
}

function displayProduct(data) {
  productContainer.innerHTML = `
    <div class="row align-items-center bg-black border border-secondary rounded overflow-hidden p-4 g-4">

      <div class="col-md-6 text-center">
        <img
          src="${data.images?.[0] || data.thumbnail}"
          alt="${data.title}"
          class="img-fluid rounded w-100"
          style="max-height: 350px; object-fit: cover;"
        />
      </div>

      <div class="col-md-6 d-flex flex-column gap-3">

        <p class="text-secondary mb-0">${data.category}</p>

        <h2 class="mb-0">${data.title}</h2>

        <p class="text-secondary mb-0">
          ${data.description}
        </p>

        <span class="fs-4 fw-bold text-info">$${data.price}</span>

        <div>
          <button type="button" class="btn btn-primary text-uppercase px-4 py-2">
            Buy now
          </button>
        </div>

      </div>
    </div>
  `;
}

getProduct();
