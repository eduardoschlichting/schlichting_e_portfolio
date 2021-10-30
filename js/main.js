import { toggleMenu } from "./components/menu.js";
import { getData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/thumbnail.js";
import TheOtherThumbnail from "./components/otherThumbnail.js";
import TheLightbox from "./components/lightbox.js";

(() => {
//   const menuBtn = document.querySelector(".menu-btn");

//   menuBtn.addEventListener("click", toggleMenu); 

  const myVue = new Vue({
    created: function() {
        // go fetch the portfolio data here
        // getData(null, (data) => this.portfolioData = data );
        
    },

    data: {
        // this is storing the database info from our fetch call
        // portfolioData: [],
        // message: "hello from Vue"
        
    },

    methods: {
        menu: toggleMenu,
        openBox() {
            this.classlist.add('open-lightbox');
        } 
    },

    components: {
        'thumb': TheThumbnail,
        'otherthumb': TheOtherThumbnail,
        'lightbox': TheLightbox
        }
    }).$mount("#app");
})();
