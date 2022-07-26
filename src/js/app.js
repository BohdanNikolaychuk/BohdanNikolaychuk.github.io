import main from './main.js';
import animation from './textAnimation.js';
import scrolling from './scroll.js';

window.addEventListener('DOMContentLoaded', () => {
  animation();
  scrolling();
  window.onscroll = function () {
    main();
  };
});
