<template>
<div :class="'country-header '+topia.country " v-bind:style="{ maskImage: 'url(/assets/Brush-Fullscreen.gif?a='+Math.random()+')'}">
  <div >
    <h2 class="title">{{topia.country}}</h2>
    <button @click="animateCountry" class="dynamic btn">Start</button>
  </div>

</div>
</template>

<script>
import Answer from '@/components/Answer'
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
import SplitText from "@/gsap-bonus/SplitText"
import slugify from 'slugify'
import $ from 'jquery'

export default {
  name: 'Country',
  props: ['topia'],
  components: {
    Answer
  },
  data() {
    return {
      currentTopia: [],
      current: 0,
      tl: new TimelineMax(),
      prevQuestion: this.topia.questions[0],
      question: this.topia.questions[0]
    }
  },
  updated() {

  },
  created() {
    //do something after creating vue instance

  },
  mounted() {
    //do something after mounting vue instance
    TweenMax.to(".country-header",.6,{opacity:1,className: '+=animate'}, 0.2)
    TweenMax.fromTo(".country-header div",1,{opacity:0,y:100},{opacity:1,y:0,delay:1,ease:Power2.easeOut}, 0.2)
  },
  methods: {
    animateCountry(){
      TweenMax.fromTo(".country-header",.6,{opacity:1,className: '-=animate'},{opacity:0,className: '+=animate-out',onComplete:this.startQuestions}, 0.2)
    },
    startQuestions(){
      let slug = slugify(this.topia.questions[0].question, {
          replacement: '-',
          remove: /[$*_+˜.()'"!\-:@]/g,
          lower: true
        })
        slug = slugify(slug,{
          replacement: '',
          remove: /[^A-Za-z0-9\-]/,
          lower: true
        })


      if (this.topia) {
        this.$router.push({
          name: 'question',
          params: {
            slug:slug,
            country:this.topia.country,
            topia: this.topia
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
  @mixin transform($transforms) {
      -webkit-transform: $transforms;
      -moz-transform: $transforms;
      -ms-transform: $transforms;
      transform: $transforms;
  }
  .country-header{
    position: fixed;
    top: 50%;
    left: 50%;
    @include transform(translate(-50%,-50%));
    width: 100%;
    height: 100%;
    display: table;
    opacity: 0;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
    background-position: center;
    background-size: cover;
    &.animate-out{
      mask-image: url("/assets/Brush-Fullscreen.gif");
    }
    &.Syrië{
      background-image: url('/assets/coutries/syrie.jpg');
      .brush{
        background-color: #FFB192;
      }
    }
    &.Marokko{
      background-image: url('/assets/coutries/marokko.jpg');
      .brush{
        background-color: #FFB192;
      }
    }
    div{
      display: table-cell; vertical-align: middle;
    }
    .title {
        margin-bottom: 0px;
        font-size: calc(.01333*100% + 100px);
        opacity: 1;
        text-align: center;
    }

  }

  @-webkit-keyframes MOVE-FULLSCREEN {
      from {
          mask-position: -100% 0;
      }
      to {
          mask-position: 120% 0;
      }
  }

</style>
