<template>
 
  <div>
      <div class="top">
         <div @click="topopen()">
           <span>{{toptitle}}</span>
         </div>
         <div class="toplist" v-show="listshow == true">
           <div v-for="(lis,index) in toplist" @click="topoff(lis)">
              {{lis}}
           </div>
         </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toptitle:"上下班",
      toplist:["上下班","周边游","直通车","机场快线"],
      listshow:false
     
    }
  },
  methods:
  {
  topopen(){
    this.listshow = true;
    
  },topoff(aa){
    this.listshow = false;
    this.toptitle = aa;
  }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.toplist{
  width: 100vw;
}
.toplist div:hover{
  background: white;
  color: #CCC;
}
.toplist div {
  width: 100vw;
  height: 7vh;
  background-color: #ccc;
}
.tu{

}
.top{
   width: 100vw;
   height: 7vh;
   margin-top: -8vh;
   background: #ff4a39; 
   text-align:center;
   line-height: 7vh;
   font-size: 20px;
   color: white;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
