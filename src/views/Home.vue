<template>
<div class="country-overview position-center">
  <h2 class="title">Waar ben je geboren?</h2>
  <ul class="countries">
    <li v-for="topia in newtopia" :key="topia.key" :class="'country dynamic '+topia.country" @click="animateCountries(topia)">
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
    animateCountries(topia) {
      this.topia = topia;
      TweenMax.fromTo(".title", 1, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power2.easeOut
      })
      TweenMax.fromTo(".countries", 1, {
        opacity: 1
      }, {
        opacity: 0,
        ease: Power2.easeOut,
        pointerEvents: 'none',
        onComplete: this.chooseCountry
      })
    },
    chooseCountry() {
      if (this.topia) {
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

    this.tl = new TimelineMax({delay:0,onComplete:this.showAnswers,onReverseComplete:this.updateAnswer},2)
    this.tl.to(".title", 1 ,{opacity:1,ease:Power2.easeOut}).to(".title", 1 ,{delay: 1, opacity:1,y:-300,scale: .7,ease:Power2.easeOut})
    //TweenMax.staggerFromTo(".option",0.6,{opacity:0,y:100},{opacity:1,y:0,delay:2, className:"+=dynamic" ,ease:Power2.easeOut}, 0.2)
    TweenMax.fromTo(".countries", 1, {
      opacity: 0,
      y: 100,
      ease:Power2.easeOut
    }, {
      opacity: 1,
      y: 0,
      delay: 2,
      ease: Power2.easeOut
    });
    TweenMax.staggerTo(".country", .6, {
      delay: 2,
      className: '+=animate'
    }, 0.2);
    TweenMax.staggerFromTo(".countries li h2", .6, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      delay: 2,
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

.country-overview{
  width: 100%;
  .title {
      color: #A5D36A;
      margin-bottom: 100px;
      font-size: 45px;
      position: fixed;
      z-index: 2;
      top: 50%;
      width: 100%;
      opacity: 0;
      left: 0%;
      text-align: center;
      @include transform(translateY(-50%));
  }
}
.countries {
    width: 100%;
    opacity: 0;
    .country {
        position: relative;
        font-size: calc(.01333*100% + 60px);
        cursor: pointer;
        margin: 0 3%;
        &.animate{
          .background{
            mask-position: -4815px 0 !important;
            animation: MOVE-MASK 1s steps(14) 1;
          }

        }
        @for $i from 1 through 10 {
            &:nth-child(#{$i}) {
                .background {
                    /*-webkit-animation-delay:(#{$i*0.2s});
              animation-delay:(#{$i*0.2s});*/


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
            &.animate{
              animation: MOVE-MASK 1s steps(14) 1;
            }
            mask-image: url("/assets/mask-image.png");
            mask-size: auto 400px;
            mask-repeat: no-repeat;


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
