import AOS from 'aos';

import 'reset-css';
import 'normalize.css';
import 'aos/dist/aos.css';
import 'bootstrap-4-grid';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

window.addEventListener('load', () => {
  AOS.init();
});
