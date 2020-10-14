import ProductsService from '../domain/ProductsService';
import HttpClient from '../infra/http/HttpClient';

import ProductsComponent from '../ui/components/ProductsComponent';

const productsComponent = new ProductsComponent('[data-js="productsComponent"]');

export default class AppController {
  constructor() {
    this.productsService = new ProductsService(HttpClient);

    this.products = [];
    this.page = 1;
  }

  async getProducts() {
    const {
      data: {
        products,
      },
    } = await this.productsService.getProducts(this.page);

    this.products = [...this.products, ...products];

    productsComponent.render({
      products: this.products,
      fetchProducts: () => this.nextProductsPage(),
    });
  }

  async nextProductsPage() {
    this.page += 1;

    await this.getProducts();
  }
}
