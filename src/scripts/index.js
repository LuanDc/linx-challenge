import AOS from 'aos';

import ProductsController from './controller/ProductsController';
import ProductsComponent from './ui/components/ProductsComponent';

import 'reset-css';
import 'aos/dist/aos.css';
import 'bootstrap-4-grid';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const productsController = new ProductsController();
const productsComponent = new ProductsComponent('[data-js="productsComponent"]');

window.onload = async function onload() {
  AOS.init();

  const products = await productsController.getProducts();
  productsComponent.render(products);
};
