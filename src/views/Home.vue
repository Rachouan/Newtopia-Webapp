<template>
<div class="countries position-center">
  <ul class="countries">
    <li v-for="topia in newtopia" :key="topia.key" :class="'country dynamic '+topia.country" @click="chooseCountry(topia)">
      <div class="background" style=""></div>
      <div class="overlay"></div>
      <h2 class="dynamic__attribute">{{topia.country}}</h2>
    </li>
  </ul>
</div>
</template>

<script>
// @ is an alias to /src
import newtopia from '@/data/newtopia'
import {
  TweenMax,
  Power2,
  TimelineLite
} from "gsap/TweenMax";
import $ from 'jquery';
//import db from '@/firebase/init'

export default {
  name: 'home',
  data() {
    return {
      topia: null,
      newtopia: []
    }
  },
  methods: {
    chooseCountry(topia) {
      if (topia) {
        this.topia = topia;
        this.$router.push({
          name: 'country',
          params: {
            topia: this.topia
          }
        })
      }
    },
    paralax(event) {


    }
  },
  created() {

    this.newtopia = newtopia

  },
  mounted() {
    //do something after mounting vue instance
    TweenMax.staggerFromTo(".countries li h2", .6, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: Power2.easeOut
    }, 0.2);
  }
}
</script>
<style lang="scss">
@mixin ease-bezier($sec,$bezier) {
    -webkit-transition: all $sec $bezier;
    -moz-transition: all $sec $bezier;
    -o-transition: all $sec $bezier;
    transition: all $sec $bezier;
    /* custom */
    -webkit-transition-timing-function: $bezier;
    -moz-transition-timing-function: $bezier;
    -o-transition-timing-function: $bezier;
    transition-timing-function: $bezier;
    /* custom */
}
@mixin transform($transforms) {
    -webkit-transform: $transforms;
    -moz-transform: $transforms;
    -ms-transform: $transforms;
    transform: $transforms;
}

.countries {
    width: 100%;
    .country {
        position: relative;
        font-size: calc(.01333*100% + 60px);
        cursor: pointer;
        margin: 0 3%;

        @for $i from 1 through 10 {
            &:nth-child(#{$i}) {
                .background {
                    /*-webkit-animation-delay:(#{$i*0.2s});
              animation-delay:(#{$i*0.2s});*/
                    animation: MOVE-MASK #{$i*0.2s} steps(14) 1;
                }

            }
        }
        &.Syrië {
            .background {
                background-image: url("/assets/coutries/syrie.jpg");
            }
        }
        &.Marokko {
            .background {
                background-image: url("/assets/coutries/Marokko.jpg");
            }
        }
        .background {
            position: absolute;
            z-index: -1;
            left: 50%;
            top: 50%;
            @include transform(translate(-50%,-50%));
            width: 300px;
            height: 400px;
            mask-image: url("/assets/mask-image.png");
            mask-size: auto 400px;
            mask-repeat: no-repeat;
            mask-position: -4815px 0 !important;
            animation: MOVE-MASK 1s steps(14) 1;
            mask-mode: luminance;

            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

    }
}

@-webkit-keyframes MOVE-MASK {
    from {
        mask-position: -15px 0;
    }
    to {
        mask-position: -4815px 0;
    }
}
</style>
