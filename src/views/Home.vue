<template>
  <div class="home darkTheme">
    <transition name="cursor">
      <div
        v-if="showCursor"
        :style="cursorCircle"
        class="g-cursor__circle"
      ></div>
    </transition>
    <h1 class=" ME teal--text text--lighten-3 mt-5 ml-5 ">
      Gabillard Thibault <span>Développeur junior Fullstack</span>
    </h1>

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
      <div
        @mouseover="showCursor = true"
        @mouseleave="showCursor = false"
        @click="LinkPropos"
        class="nav--btn--propos"
      >
        A Propos
      </div>
    </div>
    <div class="home--nav--Comp d-flex justify-start align-end">
      <div
        @mouseover="showCursor = true"
        @mouseleave="showCursor = false"
        @click="LinkComp"
        class="nav--btn--Comp"
      >
        Compétences
      </div>
    </div>
    <div
      class="home--nav--Real d-flex flex-column-reverse  align-end justify-end"
    >
      <transition name="trot">
        <a
          @mouseover="showCursor = true"
          @mouseleave="showCursor = false"
          @click="LinkTrot"
          v-if="ShowReal"
          class="nav--btn--trot grey--text text--lighten-1"
          >Trot&Go
          <span v-if="showTrot"> <i class="fas fa-chevron-left"></i> </span
        ></a>
      </transition>
      <transition name="claviste">
        <a
          @mouseover="showCursor = true"
          @mouseleave="showCursor = false"
          @click="LinkClav"
          v-if="ShowReal"
          class="nav--btn--claviste grey--text text--lighten-1"
          >The Claviste
          <span v-if="showClav"> <i class="fas fa-chevron-left"></i> </span
        ></a>
      </transition>
      <div
        @mouseover="showCursor = true"
        @mouseleave="showCursor = false"
        @click="LinkReal"
        class="nav--btn--real"
      >
        Réalisations
      </div>
    </div>
    <div class="home--nav--contact d-flex  align-start justify-start">
      <div
        @mouseover="showCursor = true"
        @mouseleave="showCursor = false"
        @click="LinkCont"
        class="nav--btn--cont"
      >
        Me Contacter
      </div>
    </div>

    <!-- //Content middle -->
    <v-container class="home--container" fluid>
      <propos
        :tick="wheelTick"
        :tickMax="wheelTickMax"
        :link="linkPropos"
        class="proposComponent"
      />
      <competences
        :tick="wheelTick"
        :tickMax="wheelTickMax"
        :linkcomp="linkComp"
        class="CompComponent"
      />
      <realisation
        :tick="wheelTick"
        :tickMax="wheelTickMax"
        :link="linkReal"
        class="realComponent"
      />
      <trot
        :tick="wheelTick"
        :tickMax="wheelTickMax"
        :link="linkTrot"
        class="trotComponent"
      />
      <contact
        :tick="wheelTick"
        :tickMax="wheelTickMax"
        :link="linkCont"
        class="contactComponent"
      />
    </v-container>

    <div class="signature d-flex justify-end align-end mr-5 grey--text ">
      <p>Crée par Thibault Gabillard / noyDono</p>
    </div>
  </div>
</template>

<script>
import propos from "../components/aPropos";
import competences from "../components/competences";
import realisation from "../components/realisation";
import trot from "../components/trot";
import contact from "../components/contact";
export default {
  components: {
    propos,
    competences,
    realisation,
    trot,
    contact,
  },
  data() {
    return {
      wheelTick: 0,
      wheelTickMax: 25,
      ShowReal: false,
      showClav: false,
      showTrot: false,
      linkPropos: false,
      linkComp: false,
      linkReal: false,
      linkClav: false,
      linkTrot: false,
      linkCont: false,
      xChild: 0,
      yChild: 0,
      xParent: 0,
      yParent: 0,
      hover: false,
      showCursor: false,
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      let container = document.querySelector(".home");
      let proposBtn = document.querySelector(".nav--btn--propos");
      let compBtn = document.querySelector(".nav--btn--Comp");
      let realBtn = document.querySelector(".nav--btn--real");
      let contBtn = document.querySelector(".nav--btn--cont");

      //ticking
      if (event.deltaY > 0 && this.wheelTick < 25) {
        this.wheelTick++;
      } else if (event.deltaY < 0 && this.wheelTick > 0) {
        this.wheelTick--;
      }
      if (this.wheelTick <= 5) {
        container.style.backgroundColor = "#212121";
        container.style.transition = "2s";
        proposBtn.style.color = "#ffffff";
        proposBtn.style.transition = "2s";
        compBtn.style.color = "#6b6a6a";
        compBtn.style.transition = "2s";
      } else if (this.wheelTick >= 5 && this.wheelTick <= 9) {
        this.ShowReal = false;
        container.style.backgroundColor = "#e0e0e0";
        container.style.transition = "2s";
        compBtn.style.color = "#212121";
        compBtn.style.transition = "2s";
        proposBtn.style.color = "#6b6a6a";
        proposBtn.style.transition = "2s";
        realBtn.style.color = "#6b6a6a";
        realBtn.style.transition = "2s";
      } else if (this.wheelTick >= 9) {
        this.ShowReal = true;
        this.showClav = true;
        this.showTrot = false;
        container.style.backgroundColor = "#212121";
        container.style.transition = "2s";
        realBtn.style.color = "#ffffff";
        realBtn.style.transition = "2s";
        compBtn.style.color = "#6b6a6a";
        compBtn.style.transition = "2s";
      }

      if (this.wheelTick >= 15) {
        this.ShowReal = true;
        this.showTrot = true;
        this.showClav = false;
        container.style.backgroundColor = "#212121";
        container.style.transition = "2s";
        realBtn.style.color = "#ffffff";
        realBtn.style.transition = "2s";
        compBtn.style.color = "#6b6a6a";
        compBtn.style.transition = "2s";
        contBtn.style.color = "#6b6a6a";
        contBtn.style.transition = "2s";
      }
      if (this.wheelTick >= 20) {
        this.ShowReal = false;
        container.style.backgroundColor = "#e0e0e0";
        container.style.transition = "2s";
        contBtn.style.color = "#212121";
        contBtn.style.transition = "2s";
        proposBtn.style.color = "#6b6a6a";
        proposBtn.style.transition = "2s";
        realBtn.style.color = "#6b6a6a";
        realBtn.style.transition = "2s";
      }
    },
    LinkPropos() {
      if (this.linkPropos != true) {
        this.linkComp = false;
        this.linkPropos = true;
        this.linkReal = false;
        this.linkClav = false;
        this.linkTrot = false;
        this.linkCont = false;
        this.wheelTick = 1;
      }
    },
    LinkComp() {
      if (this.linkComp != true) {
        this.linkComp = true;
        this.linkPropos = false;
        this.linkReal = false;
        this.linkClav = false;
        this.linkTrot = false;
        this.linkCont = false;
        this.wheelTick = 6;
      }
    },
    LinkReal() {
      if (this.linkReal != true) {
        this.linkComp = false;
        this.linkPropos = false;
        this.linkReal = true;
        this.linkClav = false;
        this.linkTrot = false;
        this.linkCont = false;
        this.wheelTick = 10;
      }
    },
    LinkClav() {
      if (this.linkClav != true) {
        this.linkComp = false;
        this.linkPropos = false;
        this.linkReal = false;
        this.linkClav = true;
        this.linkTrot = false;
        this.linkCont = false;
        this.wheelTick = 6;
      }
    },
    LinkTrot() {
      if (this.linkTrot != true) {
        this.linkComp = false;
        this.linkPropos = false;
        this.linkReal = false;
        this.linkClav = false;
        this.linkTrot = true;
        this.linkCont = false;
        this.wheelTick = 15;
      }
    },

    LinkCont() {
      if (this.linkCont != true) {
        this.linkComp = false;
        this.linkPropos = false;
        this.linkReal = false;
        this.linkClav = false;
        this.linkTrot = false;
        this.linkCont = true;
        this.wheelTick = 20;
      }
    },
    moveCursor(e) {
      this.xChild = e.clientX;
      this.yChild = e.clientY;

      this.xParent = e.clientX - 20;
      this.yParent = e.clientY - 15;
    },
  },
  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xParent}px) translateY(${this.yParent}px) translateZ(0) translate3d(0, 0, 0);`;
    },
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
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
