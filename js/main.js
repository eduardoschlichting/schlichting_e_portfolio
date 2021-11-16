import { toggleMenu } from "./components/TheMenu.js";
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
        getData(null, (data) => this.portfolioData = data ); 
            // get the bullk data and filter or splice - find the righ tmethod
            // this.noteworthyData = data.filter()
            // this.portfolioData = data.filter()
    
        
    },

    data: {
        // this is storing the database info from our fetch call
        portfolioData: [],
        message: "hello from Vue",
       
        showBox: false,
        currentPortfolioData: {}

    },

    methods: {
        
        menu: toggleMenu,
        showLightBox(item) {
            // debugger;
            this.currentPortfolioData = item;
            this.showBox = true;
          },
          closeLightBox() {
              this.showBox = false;
          }

    },

    components: {
        'thumb': TheThumbnail,
        'otherthumb': TheOtherThumbnail,
        'lightbox': TheLightbox
        },

        computed: {
            // https://vuejs.org/v2/guide/computed.html
            // https://v3.vuejs.org/guide/list.html#displaying-filtered-sorted-results
            // filter the portfolioData array with a conditional
            // if note === "true", return the array
            //this = vue instance
            // itemsNoted: function() {
            //     return this.portfolioData.filter((item) => { return item.note === "true"})
                
            // }
          } 
    }).$mount("#app");
})();
