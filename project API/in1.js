
const ProductsRow = document.querySelector("main .row");

function getData() {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      const products = data.products;

      products.forEach((product) => {
        ProductsRow.innerHTML += `
          <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product h-100 bg-dark text-light border border-secondary rounded overflow-hidden d-flex flex-column">
              <img class="w-100 object-fit-cover" style="height: 200px;" src="${product.images[0]}" alt="${product.title}" />

              <div class="content d-flex flex-column flex-grow-1 gap-2 p-3">
                <h3 class="h5 mb-0 text-truncate">${product.title}</h3>

                <p class="mb-0 text-secondary small" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                  ${product.description}
                </p>

                <span class="fw-bold text-info fs-5 mt-auto">$${product.price}</span>

                <a href="./single product.html" onclick="getProductDetails(${product.id})" class="btn btn-primary btn-solid text-white text-decoration-none text-uppercase fw-semibold w-100 mt-2">
                  view details
                </a>
              </div>
            </div>
          </div>
        `;
      });
    });
}

getData();

function getProductDetails(id) {
  localStorage.setItem("productId", id);
}
