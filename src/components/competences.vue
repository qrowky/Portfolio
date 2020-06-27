<template>
  <section class="Comp">
    <v-row>
      <v-col>
        <h1 class="Comp--title grey--text text--darken-3">Compétences</h1>
        <div class="Comp--node">
          <h4 class="grey--text text--darken-1">NodeJs</h4>
          <v-img
            src="../../public/img/nodejs.jpg"
            width="450px"
            height="150px"
          ></v-img>
        </div>
        <div class="Comp--sass">
          <h4 class="grey--text text--darken-1">Sass</h4>
          <v-img
            src="../../public/img/sass.png"
            width="200px"
            max-height="100px"
          ></v-img>
        </div>
        <div class="Comp--html  ">
          <h4 class="grey--text text--darken-1">Html/Css/Js</h4>
          <v-img
            src="../../public/img/html.jpg"
            width="300px"
            height="100px"
          ></v-img>
        </div>
        <div class="Comp--linux mt-10">
          <h4 class="grey--text text--darken-1">Linux</h4>
          <v-img
            src="../../public/img/linux.jpeg"
            width="100px"
            height="100px"
          ></v-img>
        </div>
        <div class="Comp--express">
          <h4 class="grey--text text--darken-1">ExpressJs/Mongoose</h4>
          <v-img
            src="../../public/img/express.png"
            width="250px"
            height="100px"
          ></v-img>
        </div>
        <div class="Comp--git ">
          <h4 class="grey--text text--darken-1">Git/Github</h4>
          <v-img
            src="../../public/img/git.png"
            width="300px"
            height="100px"
          ></v-img>
        </div>
        <div class="Comp--mongo ">
          <h4 class="grey--text text--darken-1">MongoDB</h4>
          <v-img
            src="../../public/img/mongo.png"
            width="500px"
            height="150px"
          ></v-img>
        </div>
        <h1 class=" numerotation grey--text text--darken-2 float-right">
          {{ tick }} - {{ tickMax }}
        </h1>
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  props: ["tick", "tickMax"],
  data() {
    return {
      wheelTick: 0,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.CompHandleScroll);
  },
  methods: {
    //function ticking scroll
    CompHandleScroll() {
      let node = document.querySelector(".Comp--node"),
          sass = document.querySelector(".Comp--sass"),
          express = document.querySelector(".Comp--express"),
          linux = document.querySelector(".Comp--linux"),
          html = document.querySelector(".Comp--html"),
          git = document.querySelector(".Comp--git"),
          mongo = document.querySelector(".Comp--mongo"),
          title = document.querySelector(".Comp--title")

      if (this.tick >= 5) {
        
          let nodeRation = -335 + this.tick * 50,
          sassRatio = -335 + this.tick * 44,
          expressRation = -535 + this.tick * 55,
          linuxRation = 800 - this.tick * 40,
          htmlRation = 1300 - this.tick * 40,
          gitRation = -335 + this.tick * 23,
          mongoRation = -335 + this.tick * 35,
          titleRation = -335 + this.tick * 35;

        if (nodeRation < 400) {
          node.style.bottom = nodeRation + "px";
          node.style.opacity = 0 + this.tick / 10;
        }
        if (sassRatio < 395) {
          sass.style.bottom = sassRatio + "px";
          sass.style.opacity = 0 + this.tick / 10;
        }
        if (expressRation < 416) {
          express.style.right = expressRation + "px";
          express.style.opacity = 0 + this.tick / 10;
        }
        if (linuxRation > 200) {
          linux.style.bottom = linuxRation + "px";
          linux.style.opacity = 0 + this.tick / 10;
        }
        if (htmlRation > 800) {
          html.style.right = htmlRation + "px";
          html.style.opacity = 0 + this.tick / 10;
        }
        if (gitRation < 113) {
          git.style.bottom = gitRation + "px";
          git.style.opacity = 0 + this.tick / 10;
        }
        if (mongoRation < 70) {
          mongo.style.bottom = mongoRation + "px";
          mongo.style.opacity = 0 + this.tick / 10;
        }
        if (titleRation < 445) {
          title.style.bottom = titleRation + "px";
          title.style.opacity = 0 + this.tick / 10;
        }
      }else if(this.tick >= 22){
        console.log('test')
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.CompHandleScroll);
  },
};
</script>

<style lang="scss">
@import "../../public/style/competences.scss";
</style>
