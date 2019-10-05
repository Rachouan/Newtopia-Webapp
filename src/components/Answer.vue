<template>
  <div class="question">
    <div class="answers position-center">
      <ul>
        <li class="dynamic option" v-for="answer in question.answers" :key="answer.id" @click="$emit('answer-clicked',answer.questions)">
          <div class="brush"></div>
          <h3 class="dynamic__attribute">{{answer.answer}}</h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap/TweenMax";

export default {
  name: 'Question',
  props: ['question'],
  data(){
    return {
      answer: []
    }
  },
  updated() {
    //do something after updating vue instance
    console.log("BEING UPDATED");
  },
  mounted() {
    //do something after mounting vue instance
    //this.showAnswers()
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
  .answers{
    width: 100%;
    display: table;
    text-align: center;
    height: 300px;
    &.animate{
      @for $i from 1 through 10 {
          .option:nth-child(#{$i}) {
            .brush{
              animation: MOVE-BRUSH #{$i*0.15s} steps(3) 1;
            }
          }
      }

    }
    .option{
      font-size: calc(.01333*80% + 40px);
      max-width: 600px;
      position: relative;

      cursor: pointer;
      margin: 0 60px;
      text-align: center;
      display: inline-grid;
      vertical-align: top;
      //opacity: 0;

      /*span{
        display: inline-block;
        position: absolute;
        left: 50%;
        top: 50%;
        @include transform(translate(-50%,-50%));
      }*/

      .brush{
        mask-image: url("/assets/brush-image.png");
        mask-size: 132px auto;
        mask-repeat:no-repeat;
        mask-position: 0 -570px;
        background-color: #A5D36A;
        width: 132px;
        height: 180px;
        position: absolute;
        left: 50%;
        top: 40px;
        opacity: .3;
        z-index: -1;

        @include transform(translate(-50%,-50%));
      }
    }
  }
  @-webkit-keyframes MOVE-BRUSH {
      from {
          mask-position: 0 4px;
      }
      to {
          mask-position: 0 -570px;
      }
  }
</style>
