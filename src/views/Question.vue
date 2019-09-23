<template>
<div :class="'question '+ country ">
  <h2 id="question" class="title">{{question.question}}</h2>
  <div class="" v-if="question">
    <Answer :question="question" v-on:answer-clicked="selectAnswer" />
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
  name: 'Question',
  props: ['topia','country'],
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
    //do something after updating vue instance
    this.askQuestion();
  },
  created() {
    //do something after creating vue instance

  },
  mounted() {
    //do something after mounting vue instance
    console.log("Mounted");
    console.log(this.topia);
    this.askQuestion();
  },
  methods: {
    askQuestion() {
      console.log("ASK");
      //let splitQuestion = new SplitText("#question")
      //var targetElement = document.getElementById("question");
      this.tl = new TimelineMax({delay:0,onComplete:this.showAnswers,onReverseComplete:this.updateAnswer},2)
      this.tl.to("#question", 1 ,{opacity:1,ease:Power2.easeOut}).to("#question", 1 ,{delay: 1, opacity:1,y:-300,scale: .7,ease:Power2.easeOut})
      //TweenMax.staggerFromTo(".option",0.6,{opacity:0,y:100},{opacity:1,y:0,delay:2, className:"+=dynamic" ,ease:Power2.easeOut}, 0.2)
      TweenMax.fromTo(".answers",1,{opacity:0,y:100},{opacity:1,y:0,delay:2,ease:Power2.easeOut,className: '+=animate'}, 0.2)
      //this.qTween = TweenMax.fromTo("#question", .6, {opacity:0,y:0} , {opacity:1,y:0, onComplete:this.showAnswers()},Power2.easeOut);
      //TweenMax
    },
    showAnswers(){
      //splitQuestion.revert()
      //this.tween.fromTo("#question", .6, {opacity:0,y:0} , {opacity:1,y:-200},Power2.easeOut);
      //this.tween.staggerTo(".option", 0.6,{opacity:1,y:0}, 0.2 , Power2.easeOut);
    },
    brush(){
      $('.answers .brush').addClass('animate')
    },
    selectAnswer(currentTopia) {

      this.tl.clear(true);
      this.tl.to("#question", 1 ,{opacity:0,y:0,scale: 1,onComplete:this.updateAnswer,ease:Power2.easeOut})
      TweenMax.fromTo(".answers",1,{opacity:1,y:0},{opacity:0,y:100,delay:0,className: '-=animate',ease:Power2.easeOut}, 0.2)
      //TweenMax.staggerFromTo(".option",0.6,{opacity:1,y:0},{opacity:0,y:100,delay:0,ease:Power2.easeOut}, 0.2)
      //console.log(this.tween);
      console.log("SELECT ANSWER");
      this.currentTopia = currentTopia
      //this.tween.fromTo("#question", .6, {opacity:1,y:-200} ,{opacity:0,y:0,onComplete:this.updateAnswer(currentTopia)}, Power2.easeOut);

    },
    updateAnswer(){
      if (this.currentTopia[0].final) {
        this.$router.push({
          name: 'complete'
        })
      } else if (this.currentTopia[0].back) {
        console.log("BACK");
        this.question = this.question
        this.$router.go(-1)
      } else {
        this.prevQuestion = this.question
        this.question = this.currentTopia[0]
        this.nextQuestion()
      }
    },
    nextQuestion(){
      let slug = slugify(this.question.question, {
          replacement: '-',
          remove: /[$*_+˜.()'"!\-:@]/g,
          lower: true
        })
        slug = slugify(slug,{
          replacement: '',
          remove: /[^A-Za-z0-9\-]/,
          lower: true
        })

        console.log(this.currentTopia);
      if (this.topia) {
        this.$router.push({
          name: 'question',
          params: {
            slug:slug,
            country: this.country,
            topia: this.question
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
  .question{
    &.Syrië{
      .title{
        color: #FFB192;
      }
      .brush{
        background-color: #FFB192;
      }
    }
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

</style>
