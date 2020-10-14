import ProductsService from '../domain/ProductsService';
import HttpClient from '../infra/http/HttpClient';

import ProductsComponent from '../ui/components/ProductsComponent';

const productsComponent = new ProductsComponent('[data-js="productsComponent"]');

export default class AppController {
  constructor() {
    this.productsService = new ProductsService(HttpClient);

    this.state = {
      products: [],
      productPage: 1,
    };
  }

  async getProducts() {
    const {
      data: {
        products,
      },
    } = await this.productsService.getProducts(this.state.page);

    this.state.products = [...this.state.products, ...products];

    productsComponent.render({
      products: this.state.products,
      fetchProducts: () => this.nextProductsPage(),
    });
  }

  async nextProductsPage() {
    this.state.page += 1;

    await this.getProducts();
  }
}
