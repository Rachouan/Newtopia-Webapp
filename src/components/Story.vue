<template>
  <div :class="'story '+country " :style="{ maskImage: 'url(/assets/Brush-Fullscreen.gif?a='+Math.random()+')'}">
    <div class="story-content">
        <div class="story-title" id="story-title">{{story}}</div>
        <button @click="$emit('continue-clicked')" class="dynamic btn disable">Continue</button>
    </div>
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
import SplitText from "@/gsap-bonus/SplitText"
import slugify from 'slugify'
import $ from 'jquery'

export default {
  name:'Story',
  props: {
    story: String,
    country:String
  },
  data(){
    return {
      continue: false
    }
  },
  updated() {
    //do something after updating vue instance
    this.animateText()
  },
  mounted() {
    this.animateText()
  },
  methods: {
    animateText() {
      let splitText = new SplitText("#story-title")
      console.log(splitText);
      TweenMax.staggerFromTo(splitText.words ,0.6,{opacity:0,y:100},{opacity:1,y:0,delay:2 ,ease:Power2.easeOut}, 0.3, this.continueExperience)
    },
    continueExperience(){

      TweenMax.fromTo(".story .btn", 1 ,{opacity:0,pointerEvents: 'none'},{opacity:1,pointerEvents: 'all',className: '-=disable',ease:Power2.easeOut})
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
  .story{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #A5D36A;
    &.Syrië{
      background-color: #FFB192;
    }
    &.Marokko{
      background-color: #A5D36A;
    }
    .story-content{
      position: absolute;
      left: 50%;
      top: 50%;
      @include transform(translate(-50%,-50%));
      width: 70%;
      text-align: center;
    }
    .story-title{
      font-size: 40px;
      color: #000000;
    }
    .disable{
      pointer-events: none;
      opacity: 0;
    }
    button{
      margin-top: 20px;
    }
  }
</style>
