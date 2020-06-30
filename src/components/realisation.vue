<template>
  <section>
    <transition name="realTitle">
      <span v-if="showReal" class=" real--title white--text "
        >The Claviste</span
      >
    </transition>
    <v-row>
      <transition name="realImg">
        <v-img
          v-if="showReal"
          class="real--img my-5 mx-5"
          width="100%"
          height="55%"
          src="../../public/img/theClavist.png"
        ></v-img>
      </transition>
    </v-row>
    <v-row>
      <transition name="realP">
        <p v-if="showReal" class="real--p my-5 mx-5 grey px-7 py-7">
          The Claviste est un blog sur le theme du clavier que j'ai réaliser
          l'or de ma formation. J'ai utiliser handelbars est materilize pour le
          front-end et NodeJs pour le back-end
          <span><v-btn class="float-right mt-5" text target="_blank" href="https://theclaviste.noydono.fr">Voir le site </v-btn></span>
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
      wheelTick: 0,
      showReal: false,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.RealHandleScroll);
  },
  methods: {
    //function ticking scroll
    RealHandleScroll() {
      if (this.tick <= 9 || this.tick >= 15) {
        this.showReal = false;
      } else if (this.tick >= 9 || this.tick <= 15) {
        this.showReal = true;
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.RealHandleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/style/real.scss";
@import "../../public/style/realAnimation.scss";
</style>
