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
            <p>Tag 1</p>
            <p>Tag 2</p>
            </div>
            
            <a :href='item.Behance'><h3>See the Project on Behance</h3></a>
            <p class="desc_1">{{item.Desc1}}</p>
            <img class="img_lightbox" :src='"images/" + item.Image1'>

            <p class="desc_2">{{item.Desc2}}</p>
            <img class="img_lightbox" :src='"images/" + item.Image2' alt="">

            <p class="desc_3">{{item.Desc3}}</p>
            <img class="img_lightbox" :src='"images/" + item.Image3' alt="">

            <p class="desc_4">{{item.Desc4}}</p>
            <img class="img_lightbox" :src='"images/" + item.Image4' alt="">
            <img class="img_lightbox" :src='"images/" + item.Image5' alt="">
        </div>
        </div>
  </section>
  
    `
}