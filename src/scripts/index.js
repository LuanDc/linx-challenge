import AOS from 'aos';

import AppController from './controller/AppController';

import 'reset-css';
import 'aos/dist/aos.css';
import 'bootstrap-4-grid';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

const appController = new AppController();

window.onload = async function onload() {
  AOS.init();

  await appController.getProducts();
};
