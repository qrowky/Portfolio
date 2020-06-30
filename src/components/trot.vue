<template>
  <section>
    <transition name="trotTitle">
      <span v-if="showTrot" class=" trot--title white--text "
        >Trot&Go</span
      >
    </transition>
    <v-row>
      <transition name="trotImg">
        <v-img
          v-if="showTrot"
          class="trot--img my-5 mx-5"
          width="96%"
          height="50%"
          src="../../public/img/trotGo.png"
          aspect-ratio="0.5"
        ></v-img>
      </transition>
    </v-row>
    <v-row>
      <transition name="trotP">
        <p v-if="showTrot" class="trot--p my-5 mx-5 grey px-6 py-6">
          Description : Ce site n'est pas réellement un site mais un éxercice réaliser pendant ma formation pour mettre en pratique nodejs .
          Outils : Materilize , handlebars , jquery , javascript , nodejs , mongoDB .
          <span><v-btn class="float-right mt-5" text target="_blank" href="https://trotgo.noydono.fr">Voir le site </v-btn></span>
        </p>
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
      showTrot: false,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.TrotHandleScroll);
  },
  methods: {
    //function ticking scroll
    TrotHandleScroll() {
      if (this.tick <= 14 || this.tick >= 20) {
        this.showTrot = false;
      } else if (this.tick >= 14 ||this.tick <= 20) {
        this.showTrot = true;
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.TrotHandleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/style/trot.scss";
@import "../../public/style/trotAnimation.scss";
</style>
