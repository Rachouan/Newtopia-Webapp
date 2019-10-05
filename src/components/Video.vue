<template>
  <div :class="'video '+country " :style="{ maskImage: 'url(/assets/Brush-Fullscreen.gif?a='+Math.random()+')'}">
    <div class="video-content">
        <video :src="'/videos/'+video" autoplay poster="posterimage.jpg" id="country-video"></video>
        <nav>
            <button @click="$emit('continue-clicked')" class="dynamic btn disable">Continue</button>
            <button @click="restartVideo" class="dynamic btn disable">Replay</button>
        </nav>

    </div>
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax"
import SplitText from "@/gsap-bonus/SplitText"
import slugify from 'slugify'
import $ from 'jquery'

export default {
  name:'Video',
  props: {
    video: String,
    country:String
  },
  data(){
    return {
      continue: false,
      vid: null
    }
  },
  updated() {
  },
  mounted() {
    this.vid = document.getElementById("country-video");
    this.vid.onstart = function() {
        TweenMax.to(".video .btn", 1 ,{opacity:0,pointerEvents: 'none'})
    };
    TweenMax.fromTo(".video .btn", 1 ,{opacity:0,pointerEvents: 'none'},{opacity:1,pointerEvents: 'all',className: '-=disable',ease:Power2.easeOut})
    this.vid.onended = function() {
      console.log('Ended');
        TweenMax.fromTo(".video .btn", 1 ,{opacity:0,pointerEvents: 'none'},{opacity:1,pointerEvents: 'all',className: '-=disable',ease:Power2.easeOut})
    };
  },
  methods: {
    restartVideo(){
      this.vid.currentTime = 0
      this.vid.play()
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
  .video{
    position: fixed;
    top: 0;
    z-index: -2;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #A5D36A;
    nav{
      position: fixed;
      left: 0;
      top: 50%;
      width: 100%;
      @include transform(translateY(-50%));
      z-index: 1;
    }
    &.Syrië{
      background-color: #FFB192;
    }
    &.Marokko{
      background-color: #A5D36A;
    }
    .video-content{
      position: absolute;
      left: 50%;
      top: 50%;
      @include transform(translate(-50%,-50%));
      width: 100%;
      height: 100%;
      text-align: center;
      video{
        width: auto;
        height: 100%;
      }
    }
    .video-title{
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
