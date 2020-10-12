export default class ProductsService {
  constructor(HttpClient) {
    this.httpClient = new HttpClient();
  }

  async getProducts(page) {
    const products = await this.httpClient.get(`
      https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}
    `);

    return products;
  }
}
