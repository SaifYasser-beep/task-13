const products = [
  {
    id: 1,
    title: "Product 1",
    description: "Description of Product 1.",
    image: "./images/download.jpg",
    alt: "Product 1",
    cssClass: "TV",
    btnText: "buy now",
    link: "#"
  },
  {
    id: 2,
    title: "Product 2",
    description: "Description of Product 2.",
    image: "./images/trent rexroth.jpg",
    alt: "Product 2",
    cssClass: "Ipad",
    btnText: "buy now",
    link: "#"
  },
  {
    id: 3,
    title: "Product 3",
    description: "Description of Product 3.",
    image: "./images/🧿🧿.jpg",
    alt: "Product 3",
    cssClass: "iphone",
    btnText: "buy now",
    link: "#"
  }
];

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} added to cart!`);
}