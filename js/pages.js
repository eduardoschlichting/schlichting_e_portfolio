import { toggleMenu } from "./components/TheMenu.js";

// const header = document.querySelector(".nav-header");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", toggleMenu);

// nav color

// window.onscroll = function() {
//     let top = window.scrollY;
//     console.log(top);

//     if(top >= 100) {
//         header.classList.add('active');
//     } else {
//         header.classList.remove('active');
//     }
// }
window.addEventListener('scroll', function() {
    let top = window.scrollY;

    if(top > 100) {
        document.querySelector(".nav-header").classList.add('active');
    } else {
        document.querySelector(".nav-header").classList.remove('active');
    }
})