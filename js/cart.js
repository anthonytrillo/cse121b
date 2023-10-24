import { products } from "../data/constants.js";

let cart = [];

const productContainer = document.getElementById('product-container');

productContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('add')) {
    validateProductCart(e.target.id);
  }
});

const validateProductCart = (id) => {
  const isRepeated = cart.some(product => product.id == id);

  if (!isRepeated) {
    const product = products.find(product => product.id == id);
    product.quantity = 1;
    cart.push(product);
    addProductCart(product);
    updateCartTotals(cart);
  } else {
    const product = cart.find(product => product.id == id);

    if ('quantity' in product) {
      product.quantity++;
      let quantity = document.getElementById(`product_quantity_${product.id}`);
      quantity.innerText = `Count: ${product.quantity}`;
      updateCartTotals(cart);
    } else {
      product.quantity = 1;
      let quantity = document.getElementById(`product_quantity_${product.id}`);
      quantity.innerText = `Count: ${product.quantity}`;
      updateCartTotals(cart);
    }
  }
};

const addProductCart = (product) => {
  const container = document.getElementById('cart-container');
  const div = document.createElement('div');
  div.classList.add('productInCart');
  div.innerHTML = `
    <p>${product.title.slice(0, 20)}...</p>
    <p>Price: $${product.price}</p>
    <p><span id="product_quantity_${product.id}">Count: 1</span></p>
    <button class="btn waves-effect waves-ligth deleteButton" value="${product.id}">X</button>
  `
  container.appendChild(div);
};

const updateCartTotals = (cart) => {
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPurchase = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  paintTotalCart(totalQuantity, totalPurchase);
};

const paintTotalCart = (totalQuantity, totalPurchase) => {
  const counterCart = document.getElementById('counter-cart');
  const totalPrice = document.getElementById('total-price');

  counterCart.innerText = totalQuantity;
  totalPrice.innerText = totalPurchase.toFixed(2);
};

const paintCart = (cart) => {
  const container = document.getElementById('cart-container');

  container.innerHTML = '';

  cart.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('productInCart');
    div.innerHTML = `
      <p>${product.title.slice(0, 15)}...</p>
      <p>Price: $${product.price}</p>
      <p id=product_quantity_${product.id}>Count: ${product.quantity}</p>
      <button class="btn waves-effect waves-ligth deleteButton" value="${product.id}">X</button>
    `
    container.appendChild(div);
  });
};

export const deleteProductCart = (id) => {
  const productIndex = cart.findIndex(product => product.id == id);
  cart.splice(productIndex, 1);
  paintCart(cart);
  updateCartTotals(cart);
};