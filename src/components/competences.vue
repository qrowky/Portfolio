<template>
  <section class="">
    <v-row class=" Comp ">
      <transition name="title">
        <h2 v-if="showComp" class="Comp--title grey--text text--darken-3">
          Compétences
        </h2>
      </transition>

      <transition name="node">
        <div v-if="showComp" class="Comp--node">
          <h4 class="grey--text text--darken-1">NodeJs</h4>
          <v-img
            src="../../public/img/nodejs.jpg"
            width="450px"
            height="150px"
          ></v-img>
        </div>
      </transition>

      <transition name="sass">
        <div v-if="showComp" class="Comp--sass">
          <h4 class="grey--text text--darken-1">Sass</h4>
          <v-img
            src="../../public/img/sass.png"
            width="200px"
            max-height="100px"
          ></v-img>
        </div>
      </transition>
      <transition name="html">
        <div v-if="showComp" class="Comp--html">
          <h4 class="grey--text text--darken-1">Html/Css/Js</h4>
          <v-img
            src="../../public/img/html.jpg"
            width="300px"
            height="100px"
          ></v-img>
        </div>
      </transition>

      <transition name="linux">
        <div v-if="showComp" class="Comp--linux">
          <h4 class="grey--text text--darken-1">Linux</h4>
          <v-img
            src="../../public/img/linux.jpeg"
            width="100px"
            height="100px"
          ></v-img>
        </div>
      </transition>

      <transition name="express">
        <div v-if="showComp" class="Comp--express">
          <h4 class="grey--text text--darken-1">ExpressJs/Mongoose</h4>
          <v-img
            src="../../public/img/express.png"
            width="250px"
            height="100px"
          ></v-img>
        </div>
      </transition>

      <transition name="git">
        <div v-if="showComp" class="Comp--git">
          <h4 class="grey--text text--darken-1">Git/Github</h4>
          <v-img
            src="../../public/img/git.png"
            width="300px"
            height="100px"
          ></v-img>
        </div>
      </transition>

      <transition name="mongo">
        <div v-if="showComp" class="Comp--mongo ">
          <h4 class="grey--text text--darken-1">MongoDB</h4>
          <v-img
            src="../../public/img/mongo.png"
            width="450px"
            height="150px"
          ></v-img>
        </div>
      </transition>
      <h1 class=" numerotation grey--text text--darken-2 float-right">
        {{ tick }} - {{ tickMax }}
      </h1>
    </v-row>
  </section>
</template>
<script>
export default {
  props: ["tick", "tickMax"],
  data() {
    return {
      wheelTick: 0,
      showComp: false,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.CompHandleScroll);
  },
  methods: {
    //function ticking scroll
    CompHandleScroll() {
      if (this.tick <= 5 || this.tick >= 10) {
        this.showComp = false;
      } else if (this.tick >= 5) {
        this.showComp = true;
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.CompHandleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/style/competences.scss";
@import "../../public/style/competencesAnimation.scss";
</style>
