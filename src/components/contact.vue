
<template>
  
        <v-row class=" contact--row d-flex justify-center align-center">
            <v-col cols="6">
                <transition name>
                
                </transition>
                <transition name="mail">
                  <v-card v-if="showCont" class="grey darken-4">
                    <v-card-text class="grey--text text-center">
                        <i class="far fa-envelope mx-2"></i>: Thibault.gabillard@protonmail.com
                    </v-card-text>
                </v-card >
                </transition>
             
                <transition name="phone">
                 <v-card v-if="showCont" class="grey darken-4 mt-5">
                    <v-card-text class="grey--text text-center">
                        <i class="fas fa-mobile-alt  mx-2"></i>: 06.20.42.55.88
                    </v-card-text>
                </v-card>
                </transition>
                 
               

            </v-col>
        </v-row>
    
  
</template>
<script>
export default {
  props: ["tick", "tickMax"],
  data() {
    return {
      showCont: false,
      
    };
  },
  created() {
    //event pour le ticking scroll event
    window.addEventListener("mousewheel", this.ContHandleScroll);
  },
  methods: {
    //function ticking scroll
    ContHandleScroll() {
      if (this.tick <= 19) {
        this.showCont = false;
      } else if (this.tick >= 19) {
        this.showCont = true;
      }
    },
  },
  destroyed() {
    // destroye de l'event  pour le ticking scroll event
    window.removeEventListener("scroll", this.ContHandleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import "../../public/style/contact.scss";
@import "../../public/style/contactAnimation.scss";
</style>

    
