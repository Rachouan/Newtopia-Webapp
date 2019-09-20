<template>
  <div class="question">
    <h2 class="title">{{question.question}}</h2>
    <div class="question position-center">
      <ul>
        <li class="dynamic option" v-for="answer in question.answers" :key="answer.id" @click="$emit('answer-clicked',answer.questions)">{{answer.answer}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Question',
  props: ['question'],
  data(){
    return {

    }
  },
  updated() {
    //do something after updating vue instance
    console.log("BEING UPDATED");
  },
  methods: {
    /*answerClicked() {
      this.$emit('answerClicked')
    }*/
  }
}
</script>

<style lang="scss">

  .title{
    color: #A5D36A;
    margin-bottom: 100px;
    font-size: 45px;
  }
  .option{
    font-size: 80px;
    margin: 0 50px;
    cursor: pointer;
  }
</style>
