            function toggleMenu(event) {
            const hamburger = document.querySelector(".menu-btn__burger");
            const nav = document.querySelector(".nav");
            const menuNav = document.querySelector(".menu-nav");
            const navItems = document.querySelectorAll(".menu-nav__item");

            let showMenu = false; // not open
                // ! = false
                if (!showMenu) {
                let body = document.body;

                body.classList.toggle("noScroll");
                hamburger.classList.toggle("open");
                nav.classList.toggle("open");
                menuNav.classList.toggle("open");
                navItems.forEach((item) => item.classList.toggle("open"));

                showMenu = true;
                } else {
                // let body = document.body;
                
                // body.classList.remove("noScroll");
                // hamburger.classList.remove("open");
                // nav.classList.remove("open");
                // menuNav.classList.remove("open");
                // navItems.forEach((item) => item.classList.remove("open"));

                showMenu = false;
                }
            }

  export { toggleMenu } 