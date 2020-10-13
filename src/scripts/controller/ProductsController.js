import ProductsService from '../domain/ProductsService';
import HttpClient from '../utils/Http';

import ProductsComponent from '../ui/components/ProductsComponent';

const productsComponent = new ProductsComponent('[data-js="productsComponent"]');

export default class ProductsController {
  constructor() {
    this.productsService = new ProductsService(HttpClient);

    this.products = [];
  }

  async getProducts(page = 1) {
    const {
      data: {
        products,
      },
    } = await this.productsService.getProducts(page);

    this.products = [...this.products, ...products];

    productsComponent.render(this.products);
  }
}
