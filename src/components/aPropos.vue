<template>
  <v-row class="prop">
    <v-col>
      <v-row class="d-flex flex-column justify-end align-end">
        <transition name="img" appear>
          <v-img
            src="../../public/img/photo-1508830524289-0adcbe822b40.jpeg"
            v-if="show"
            width="70%"
            height="400px"
            class="propos--img mt-5 ml-5  rounded"
          ></v-img>
        </transition>

        <transition name="div" appear>
          <div
            v-if="show"
            class="propos--p grey  px-12 py-12 mb-5 mr-5 rounded  mb-0"
          >
            <h2 class="propos--title mb-3 ">
              Qui suis-je !
            </h2>
            <p>
              Passionné d'informatique depuis longtemps. J'ai réalisé une
              formation de six mois dans le domaine du développement web. J'ai
              découvrir pendant ma formation un domaine passionnant, mais je
              n'ai pas envie de m'arrêter là donc si vous cherchez un
              développeur passionné qui n'a pas peur d'apprendre je suis à votre
              disposition.
            </p>
          </div>
        </transition>
      </v-row>
      <h1 class=" numerotation grey--text text--lighten-2 float-right">
        {{ tick }} - {{ tickMax }}
      </h1>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["tick", "tickMax"],
  data() {
    return {
      wheelTick: 0,
      show: true,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.ProposHandleScroll);
  },
  methods: {
    //function ticking scroll
    ProposHandleScroll() {
      if (this.tick > 5) {
        if (this.show != false) {
          this.show = false;
        }
      } else if (this.tick <= 5) {
        if (this.show != true) {
          this.show = true;
        }
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.ProposHandleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/style/propos.scss";
@import "../../public/style/proposAnimation.scss";
</style>
