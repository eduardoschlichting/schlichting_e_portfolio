
  const hamburger = document.querySelector(".menu-btn__burger");
  const nav = document.querySelector(".nav");
  const menuNav = document.querySelector(".menu-nav");
  const navItems = document.querySelectorAll(".menu-nav__item");

  let showMenu = false; // not open

  function toggleMenu() {
    // ! = false
    if (!showMenu) {
      let body = document.body;

      body.classList.add("noScroll");
      hamburger.classList.add("open");
      nav.classList.add("open");
      menuNav.classList.add("open");
      navItems.forEach((item) => item.classList.add("open"));

      showMenu = true;
    } else {
      let body = document.body;
      
      body.classList.remove("noScroll");
      hamburger.classList.remove("open");
      nav.classList.remove("open");
      menuNav.classList.remove("open");
      navItems.forEach((item) => item.classList.remove("open"));

      showMenu = false;
    }
  }

  export { toggleMenu } 