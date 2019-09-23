<template>
<div :class="'country-header '+topia.country ">
  <div>
    <h2 class="title">{{topia.country}}</h2>
    <button @click="startQuestions">Start</button>
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
  },
  methods: {
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
    width: 90%;
    height: 90%;
    display: table;
    &.Syrië{
      background-image: url('/assets/coutries/syrie.jpg');
      background-position: center;
      background-size: cover;
      /*mask-image: url("/assets/mask-image.png");
      mask-size: auto 100%;
      mask-repeat: no-repeat;
      mask-position: right 0 !important;
      animation: MOVE-MASK 1s steps(14) 1;
      mask-mode: luminance;*/

      .brush{
        background-color: #FFB192;
      }
    }
    div{
      display: table-cell; vertical-align: middle;
    }
    .title {
        margin-bottom: 0px;
        font-size: calc(.01333*100% + 80px);
        opacity: 1;
        text-align: center;
    }
    button{
      padding: 25px 40px 25px 60px;
      cursor: pointer;
      background-color: #FFB192;
      mask-image: url("/assets/brush-btn.png");
      mask-size: 100% 100%;
      mask-repeat: no-repeat;
      mask-position: right 0 !important;
      font-family: 'Maison Neue';
      font-weight: bold;
      font-size: 13px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

</style>
