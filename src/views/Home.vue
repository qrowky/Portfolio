<template>
  <div class="home darkTheme">
    <!-- //Social -->
    <div class="social d-flex flex-row justify-end mr-12 mt-3">
      <a
        target="_blank"
        class="link mx-2 grey--text text--lighten-1"
        href="https://www.linkedin.com/in/thibault-gabillard-903013199/"
        ><i class="fab fa-linkedin"></i
      ></a>
      <a
        target="_blank"
        class="link mx-2 grey--text text--lighten-1"
        href="https://github.com/noydono"
        ><i class="fab fa-github-square"></i
      ></a>
      <a
        target="_blank"
        class="link mx-2 grey--text text--lighten-1"
        href="https://twitter.com/noy_dono"
        ><i class="fab fa-twitter-square"></i
      ></a>
    </div>
    <!-- //Navigation -->
    <div class="home--nav--APropos d-flex justify-end align-end">
      <div v-on:click="navPropos"  class="nav--btn--propos">A Propos</div>
    </div>
    <div class="home--nav--Comp d-flex justify-start align-end">
      <div  class="nav--btn--Comp">Compétences</div>
    </div>
    <div class="home--nav--Real d-flex  align-start justify-end">
      <div  class="nav--btn--real">Réalisations</div>
    </div>
    <div class="home--nav--contact d-flex  align-start justify-start">
      <div  class="nav--btn--cont">Me Contacter</div>
    </div>

    <!-- //Content middle -->
    <v-container class="home--container" fluid>
    
        <propos :tick="wheelTick" :tickMax="wheelTickMax" class="proposComponent" />
        <competences :tick="wheelTick" :tickMax="wheelTickMax" class="CompComponent" /> 

    </v-container>

    <div class="signature d-flex justify-end align-end mr-5 grey--text ">
      <p>Crée par Thibault Gabillard / noyDono</p>
    </div>
  </div>
</template>

<script>
import propos from '../components/aPropos'
import competences from '../components/competences'
export default {
  components: {
    propos,
    competences,
  },
  data() {
    return {
      wheelTick: 0,
      wheelTickMax: 200,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.handleScroll);
  },
  methods: {
    
    //function ticking scroll
    handleScroll(event) {
      let container = document.querySelector('.home')
      let propos = document.querySelector('.proposComponent')
      let comp = document.querySelector('.CompComponent')
      let btnPropos = document.querySelector('.nav--btn--propos')
      let btnComp = document.querySelector('.nav--btn--Comp')
      let btnReal = document.querySelector('.nav--btn--real')
      let btnCont = document.querySelector('.nav--btn--cont')

      //ticking
      if (event.deltaY > 0) {
        this.wheelTick++;
      } else if (event.deltaY < 0 && this.wheelTick > 0){
        this.wheelTick--;
      }
      if(this.wheelTick >= 5){
        comp.style.display="block"
      }else if (this.wheelTick <= 5){
        comp.style.display="none"
      }else if (this.wheelTick >=8){
        propos.style.display="none"
      }else if (this.wheelTick <= 8){
        propos.style.dispay="block"
      }
      
      if (this.wheelTick >= 10){

        container.style.backgroundColor= "#e0e0e0"
        container.style.transition= "2s"
        btnPropos.style.color="#6b6a6a"
        btnComp.style.color="#000000"
        btnReal.style.color="#6b6a6a"
        btnCont.style.color="#6b6a6a"
       
        
      }else if( this.wheelTick <= 10){
        
        container.style.backgroundColor= "#212121"
        container.style.transition= "2s"
        btnPropos.style.color="#ffffff"
        btnComp.style.color="#6b6a6a"
        btnReal.style.color="#6b6a6a"
        btnCont.style.color="#6b6a6a"
        
        
      }

      
      console.log(this.wheelTick)
    },
    navPropos(){
     
      let ticker = this.wheelTick

      for(let i= 0;i < 10; i++){
        ticker++
        console.log('ticker:', ticker)
      }   
      return this.wheelTick = ticker
      
    },

  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss">
@import "../../public/style/style.scss";
@import "../../public/style/responsive.scss";
</style>
