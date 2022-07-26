import main from './main.js';
import scrolling from './scroll.js';

scrolling();
window.onscroll = function () {
  main();
};
