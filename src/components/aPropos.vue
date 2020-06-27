<template>
  <section class="prop">
    <v-img
      src="../../public/img/photo-1508830524289-0adcbe822b40.jpeg"
      width="70%"
      height="400px"
      class="propos--img  rounded"
    ></v-img>
    <h1 class="propos--title blue-grey--text text--lighten-2">A Propos</h1>
    <p class=" propos--p grey py-12 px-12 rounded">
      A la suite d'une fin de contrat, j'ai décidé de me réorienter dans un
      domaine que j'avais par le passé déjà un peu découvert grâce au Site d u
      Zéro et Code Academy. J'ai décidé de redécouvrir ce domaine et
      d'approfondir mes connaissances. Maintenant le bac+2 en développement web
      et web mobile obtenu, je n'ai pas envie de m'arrêter là, car c'est un
      monde passionnant. Je recherche donc à faire un bac+4 concepteur
      développeur d'applications en apprentissage ou contrat de <br />
      professionnalisation, afin d'élargir mon champ de compétences dans ce
      domaine.
    </p>
    <h1 class=" numerotation grey--text text--lighten-2 float-right">
      {{ tick }} - {{ tickMax }}
    </h1>
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
    window.addEventListener("mousewheel", this.ProposHandleScroll);
  },
  methods: {
    //function ticking scroll
    ProposHandleScroll() {
      let img = document.querySelector(".propos--img"),
        para = document.querySelector(".propos--p"),
        title = document.querySelector(".propos--title"),
        imgRatio = 150 + (this.tick * 80),
        paraRatio = 0 + (this.tick * 60),
        titleRatio = 370 + (this.tick * 40),
        opaRatio = 1 - (this.tick / 7)

      
         img.style.bottom = imgRatio + "px" 
         img.style.opacity = opaRatio
       
          para.style.bottom = paraRatio + "px"
          para.style.opacity = opaRatio + 0.05
        

          title.style.bottom = titleRatio + "px"
          title.style.opacity = opaRatio + 0.10

        
        
        
        
        
        
        
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.ProposHandleScroll);
  },
}
}
</script>

<style lang="scss">
@import "../../public/style/propos.scss";
</style>
