import ProductsService from '../domain/ProductsService';
import HttpClient from '../utils/Http';

export default class ProductsController {
  constructor() {
    this.productsService = new ProductsService(HttpClient);
  }

  async getProducts(page = 1) {
    const {
      data: {
        products,
      },
    } = await this.productsService.getProducts(page);

    return products;
  }
}
