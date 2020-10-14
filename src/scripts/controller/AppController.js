import ProductsService from '../domain/ProductsService';
import HttpClient from '../infra/http/HttpClient';

import ProductsComponent from '../ui/components/ProductsComponent';
import NewsLetterComponent from '../ui/components/NewsletterComponent';

import ValidateEmail from '../validation/ValidateEmail';

const productsComponent = new ProductsComponent('[data-js="productsComponent"]');
console.log(ValidateEmail)
const newsLetterComponent = new NewsLetterComponent({
  selector: '[data-js="newsLetterComponent"]', 
  emailValidator: ValidateEmail
});

export default class AppController {
  constructor() {
    this.productsService = new ProductsService(HttpClient);

    this.state = {
      products: [],
      productPage: 1,
    };
  }

  renderNewsLetter() {
    newsLetterComponent.render();
  }

  async init() {
    await this.getProducts();
    this.renderNewsLetter();
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
