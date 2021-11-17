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
            
            // this.portfolioData.forEach(item => item.Tags = item.Tags.split(" "));
            // this.noteworthyData.forEach(item => item.Tags = item.Tags.split(" "));
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


    // mail functionality (kept here just for now)

        let mailSubmit = document.querySelector('.submit-wrapper');

    function processMailFailure(result) {
        // show a failure message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMailSuccess(result) {
        // show a success message in the UI
        console.table(result); // table shows us an object in table form
        alert(result.message);

        // show some UI here to let the user know the mail attempt was successful
    }

    function processMail(event) {
        // block the default submit behaviour
        event.preventDefault();

        // use the SendMail component to try to process mail
        SendMail(this.parentNode)
            .then(data => processMailSuccess(data))
            .catch(err => processMailFailure(err));

            // the error handler in the catch block could actually be a generic catch-and-display function that handles EVERY error you might encounter during runtime. Might be a better strategy to pass in a flag or just a message and have the function display it in the UI
    }

    mailSubmit.addEventListener("click", processMail);
})();

// build a new js file for the menu
// import the menu and just add an event listener there 
// const menuBtn = document.querySelector(".menu-btn");