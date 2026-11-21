const cart =JSON.parse(localStorage.getItem("cart")) || [];
const cartItemsContainer = document.querySelector("#cart-items");

function renderCartItems() {
  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="text-muted">Your cart is empty.</p>`;
    return;
  }

  cartItemsContainer.innerHTML = `
    <ul class="list-group">
      ${cart.map((item, index) => `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          <div>
            <strong>${item.title}</strong>
            <div class="text-muted small">${item.description}</div>
          </div>
          <button type="button" class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
        </li>
      `).join("")}
    </ul>
  `;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
}

renderCartItems();