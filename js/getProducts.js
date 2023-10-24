import { products } from "../data/constants.js";
import { showProducts } from "../js/home.js";

export const getProducts = () => {
  fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        showProducts(data)
        products.push( ...data );
      });
};