import { deleteProductCart } from "./cart.js";

const modalContainer = document.querySelector('.modal-container');
const openCart = document.getElementById('basket-cart');
const closeCart = document.getElementById('btn-close-cart');
const modalCart = document.querySelector('.modal-cart');

openCart.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
});

closeCart.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
});

modalContainer.addEventListener('click', () => {
    closeCart.click()
});

modalCart.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('deleteButton')) {
        deleteProductCart(e.target.value);
    }
});