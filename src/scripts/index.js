import AOS from 'aos';

import 'reset-css';
import 'aos/dist/aos.css';

import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

window.addEventListener('load', () => {
  AOS.init();
});
