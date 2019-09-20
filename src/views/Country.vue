<template>
  <div class="country">
    <h2>{{topia.country}}</h2>
    <div class="" v-if="question">
      <Question :question="question" v-on:answer-clicked="selectAnswer"/>
    </div>
  </div>
</template>

<script>
//import db from '@/firebase/init'
import Question from '@/components/Question'

export default {
  name:'Country',
  props: ['topia'],
  components: {
    Question
  },
  data(){
    return {
      current: 0,
      prevQuestion: this.topia.questions[0],
      question: this.topia.questions[0]
    }
  },
  methods: {
    selectAnswer(currentTopia) {
      console.log("SELECT ANSWER");

      //this.prevQuestion = this.question
      //currentTopia[0]

      if(currentTopia[0].final){
        this.$router.push({name:'complete'})
      }else if(currentTopia[0].back){
        console.log("BACK");
        this.question = this.question
      }else{
        this.prevQuestion = this.question
        this.question = currentTopia[0]
      }
      /*if((this.current + 1) < this.questions.length){
        this.current ++

      }else{

      }*/
    }
  },
  updated() {
    //do something after updating vue instance
    console.log(this.prevQuestion);
  },
  created() {

    //do something after creating vue instance
    /*db.collection(this.country).orderBy('arrange').get()
    .then(snapshot =>{

      snapshot.forEach(doc => {
          let question = doc.data()
          question.id = doc.id
          this.questions.push(question)
        })
        this.question = this.questions[this.current]
    }).catch(err => {
      console.log(err);
    })*/
  }
}
</script>

<style>
</style>
