import { toggleMenu } from "./components/menu.js";

(() => {
  const menuBtn = document.querySelector(".menu-btn");

  menuBtn.addEventListener("click", toggleMenu);
})();
