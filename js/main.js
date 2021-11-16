import { toggleMenu } from "./components/TheMenu.js";
import { getData } from "./components/TheDataMiner.js";
import TheThumbnail from "./components/thumbnail.js";
import TheOtherThumbnail from "./components/otherThumbnail.js";
import TheLightbox from "./components/lightbox.js";

(() => {




  const myVue = new Vue({
    created: function() {
        // go fetch the portfolio data here
        getData(null, (data) => {
            this.portfolioData = data.filter(item => item.Note === "false");
            this.noteworthyData = data.filter(item => item.Note === "true");
            
            this.portfolioData.forEach(item => item.Tags = item.Tags.split(" "));
            this.noteworthyData.forEach(item => item.Tags = item.Tags.split(" "));
            // do the same for the images 
            // this.portfolioData.forEach(img => img.imgs = img.imgs.split(" "));
        }); 
            // get the bullk data and filter or splice - find the right method
            // .filter = based in a condition 

            // use for the images to filter the data
            //let tags = tada.map(item => item.Tags.split(" "));
        
    },

    data: {
        // this is storing the database info from our fetch call
        portfolioData: [],
        noteworthyData: [],
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
        }
    }).$mount("#app");

})();

// build a new js file for the menu
// import the menu and just add an event listener there 
// const menuBtn = document.querySelector(".menu-btn");