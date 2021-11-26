export default {
    name: "TheLightbox",
    props: ["item"],
    template: `
    
    <section class="lightbox">
    <div class="lightbox-wrapper">
    
        <div class="close-btn" @click="$emit('close')">
        <span class="close-btn__x"></span>
        </div>

        <div class="content">
            <h2 class="title">{{item.Title}}</h2>
            <h3>{{item.Date}}</h3>
            
            <div class="tags">
                <p>{{item.Tags}}</p>
            </div>
            
            
            <a :href='item.Live' v-if="item.Live"><h3>See the live Project</h3></a>
            <a :href='item.Github' v-if="item.Github"><h3>See the Project on Github</h3></a>   
            <a :href='item.Behance' v-if="item.Behance"><h3>See the Project on Behance</h3></a>

            <p class="desc_1" v-if="item.Desc1">{{item.Desc1}}</p>
            <img class="img_lightbox" v-if="item.Image1" :src='"images/" + item.Image1' alt="item.Image1">

            <p class="desc_2" v-if="item.Desc2">{{item.Desc2}}</p>
            <img class="img_lightbox" v-if="item.Image2" :src='"images/" + item.Image2' alt="item.Image2">

            <p class="desc_3" v-if="item.Desc3">{{item.Desc3}}</p>
            <img class="img_lightbox" v-if="item.Image3" :src='"images/" + item.Image3' alt="item.Image3">

            <p class="desc_4" v-if="item.Desc4">{{item.Desc4}}</p>

            <img class="img_lightbox" v-if="item.Image4" :src='"images/" + item.Image4' alt="item.Image4">
            <img class="img_lightbox" v-if="item.Image5" :src='"images/" + item.Image5' alt="item.Image5">
            <div class="video_lightbox">
            <video class="img_lightbox" v-if="item.video" :src='"images/" + item.video' controls alt="item.video"></video>
        </div>
        
        <section class="contact-cta contact-lightbox">
          <div class="contact-wrapper">
            <h2 class="gradient-text">Let's Work together!</h2>
            <p>You have an amazing (or crazy) idea for your next web project? Let’s build something awesome!</p>
            <P>Simply send me an message with your inquire. I promise to respond asap!</p>
            <button>contact me</button>
          </div>
          
        </section>
    </div>
    </div>
  </section>
  
    `
}