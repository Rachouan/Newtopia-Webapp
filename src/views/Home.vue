<template>
  <div class="countries position-center">
    <ul class="countries">
        <li v-for="topia in newtopia" :key="topia.key" class="country" @click="chooseCountry(topia)">
          <div class="background"></div>
          <div class="overlay"></div>
          <h2>{{topia.country}}</h2>
        </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import newtopia from '@/data/newtopia'
//import db from '@/firebase/init'

export default {
  name: 'home',
  data(){
    return {
      topia: null,
      newtopia: []
    }
  },
  methods: {
    chooseCountry(topia) {
      if(topia){
        this.topia = topia;
        this.$router.push({name:'country', params: {topia:this.topia}})
      }
    }
  },
  created() {
    //do something after creating vue instance
    /*db.collection('countries').get()
    .then(snapshot =>{
      snapshot.forEach(doc => {
          let country = doc.data()
          country.id = doc.id
          this.countries.push(country)
        })
    }).catch(err => {
      console.log(err);
    })*/
    //console.log(newtopia);
    this.newtopia = newtopia

  }
}
</script>
<style lang="scss">

  .countries{
    .country{
      font-size: 80px;
      cursor: pointer;
    }
  }

</style>
