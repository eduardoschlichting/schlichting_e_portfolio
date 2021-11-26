export default {
    name: "TheThumbnailComponent",
    props: ["piece"],

    template: `
    <div class="project-box" @click="showmydata" :style="{ backgroundImage: 'url(images/' + piece.Image1 + ')'}">

              <div class="project-box__content">
                <h3 class="project-heading">{{piece.Title}}</h3>
                <h4>{{piece.Date}}</h4>

                <h4>{{piece.Tags}}</h4>
              </div>

          </div>
    `,

    methods: {
      showmydata() {
            
      this.$emit("showdata", this.piece);
    }
  }
}