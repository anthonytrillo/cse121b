export const showProducts = (data) => {
  const container = document.getElementById("product-container");

  data.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `
      <div class="card-image">
        <img src=${product.image}>
        <span class="card-title">${product.title}</span>
        <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${product.id} class="material-icons add">add_shopping_cart</i></a>
      </div>
      <div class="card-content">
          <p>Price: $${product.price}</p>
      </div>
    `
    container.appendChild(div);
  });
};