export default class ProductsComponent {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  template(products) {
    return (`
      <div class="products">
        ${products.map((product) => (`
          <div class="product">
            <img class="product__image" src="${product.image}" alt="imagem do produto" />
            <div class="product__content">
              <h3 class="product__name">${product.name}</h3>
              <ul>
                <li class="product__description">
                  ${product.description}
                </li>
                <li class="product__old-price">
                  De: R$${product.oldPrice}
                </li>
                <li class="product__price">
                  Por: R$${product.price}
                </li>
                <li class="product__installments">
                  ou ${product.installments.count}x de R$${product.installments.value}
                </li>
              </ul>
              <button type="button" class="button button--primary button--block">Comprar</button>
            </div>
          </div>
        `)).join('')}
      </div>
      <button 
        class="button button--primary button--lg button--center" 
        data-js="fetch-products"
      >
      Ainda mais produtos aqui!
    </button>
    `);
  }

  render({ products, fetchProducts }) {
    this.element.innerHTML = this.template(products);
    this.element
      .querySelector('[data-js="fetch-products"]')
      .addEventListener('click', () => {
        fetchProducts();
      });
  }
}
