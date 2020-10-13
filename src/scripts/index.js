import AOS from 'aos';

import ProductsController from './controller/ProductsController';

import 'reset-css';
import 'aos/dist/aos.css';
import 'bootstrap-4-grid';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const productsController = new ProductsController();

window.onload = async function onload() {
  AOS.init();

  await productsController.getProducts();
};
