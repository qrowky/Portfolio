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
              A la suite d'une fin de contrat, j'ai décidé de me réorienter dans
              un domaine que j'avais par le passé déjà un peu découvert grâce au
              Site du Zéro et Code Academy. J'ai décidé de redécouvrir ce
              domaine et d'approfondir mes connaissances. Maintenant le bac+2 en
              développement web et web mobile obtenu, je n'ai pas envie de
              m'arrêter là, car c'est un monde passionnant. Je recherche donc à
              faire un bac+4 concepteur développeur d'applications en
              apprentissage ou contrat de professionnalisation, afin d'élargir
              mon champ de compétences dans ce domaine.
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
