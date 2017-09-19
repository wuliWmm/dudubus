<template>
  <div class="hello">
  <div class="top">
    <div class="topab" @click="down()">{{toptitle}}</div>
    <div class="topst">嘟嘟巴士</div>
    <div class="tagllo">
      <div class="taglloL">
        <div class="tagllobtn">上下班</div>
      </div>
      <div class="taglloR">
         <div class="tagllobtn2">包车</div>
      </div>
    </div>
</div>
<div class="cutylist" v-show="ctiylis == true">
    <div class="cts" v-for="(lst,index) in ctiy" @click="guan(lst)">
        {{lst}}
    </div>
</div>
<div class="main">
      <div class="input">
        <div class="input1" v-show="huan == true">
            <router-link  :to="{path:'/buynext',query:{id:1}}" class="inputB">
              <div class="IMG2"></div>
              <div>{{goname}}</div>
            </router-link>
            <div class="inputgang"></div>
            <router-link :to="{path:'/buynext',query:{id:2}}" class="inputB">
              <div class="IMG"></div>
              <div>{{staname}}</div>
            </router-link>
        </div>
        <div class="input1" v-show="huan == false">
            <div class="inputB">
              <div class="IMG"></div>
              <div>{{staname}}</div>
            </div>
            <div class="inputgang"></div>
            <div class="inputB">
              <div class="IMG2"></div>
              <div>{{goname}}</div>
              "40.0479312144,116.3065661771"
            </div>
        </div>
         
      </div> 
       <div class="inputhuan">
          <img  src="../../assets/22-51-55.png" @click="qie()">
      </div> 
</div>
<div>
 
        <router-link  @click="go()" :to="{path:'/minute'}" class="btn">
             查询
            </router-link>
   
</div>

</div>
</template>

<script>

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      toptitle:"北京↑",
      goname:"请输入起点",
      staname:"请输入终点",
      huan:true,
      ctiy:[],
      ctiylis:false,
      minutebus:""
    }
  },
  methods:{
    go(){
       this.$ajax.get("http://localhost/getlinefen.php?start="+this.goname+"&end="+this.staname).then((res)=>{
          console.log(res)
      })
    },
    minute(){
      let bb = true;
      //this.minutebus = true;
      this.$store.commit("min",bb);
      if(this.$store.state.minuteval == true){
        this.minutebus = this.$store.state.minuteval;
      }
    },
    guan(aa){
      this.toptitle = aa;
      this.ctiylis=false;
    },
    ing(){
      this.goname = this.$store.state.start;
      this.staname = this.$store.state.end;
       this.minutebus = this.$store.state.minuteval;
    },
    qie(){
      if(this.huan == true){
          this.huan = false;
      }else{
          this.huan = true;
      }
    },
    down(){
      this.ctiylis=true;
       this.$ajax.get("http://localhost/luxian.php").then((res)=>{
             
              this.ctiy = res.data.data.cities;
               console.log(this.ctiy);  

          })
    }
  },
 mounted(){
    this.ing()
  },components:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.minute{
  width: 100vw;
  height: 100vh;
  background: #ccc;
  position: fixed;
  z-index: 150;
  top: 0;
}
.cutylist{
  width: 100vw;
  height: 93vh;
  position: fixed;
  top: 7vh;
  left: 0;
  background: white;
  z-index: 150;
}
.top{
  width: 100vw;
  margin-left:0vw;
  height: 7vh;
  background:#ff4a39;
  position: fixed;
  top: 0;
  line-height: 7vh;
  color: white;
  text-align:center;
}
.topab{
  position: absolute;
  left: 3vw;
}
.tagllo{
 padding-top: 1.5vh;
  width: 100vw;
  height: 3.6vh;
  padding-bottom: 1.5vh;
  /*background: #f8f8f8;*/
  
}
.taglloL{
  width: 49.8vw;
  height: 3.6vh;
  float: left;
  border-right:  1px solid #666;}
.taglloR{
  width: 49.8vw;
  height: 3.6vh;
   float:right;
}
.tagllobtn{
  width: 90%;
  margin-left: 5%;
  color: white;
  background:#ff4a39;line-height: 3.6vh;
  border-radius: 5px;
  font-size: 14px;

}
.tagllobtn2{
  width: 90%;
  margin-left: 5%;
  color: #666;
  line-height: 3.6vh;
  border-radius: 5px;
  font-size: 14px;

}
input{
  border:none;
}
.main{
  margin-top: 15vh;
  width: 98%;
  height: 14vh;
  margin-left: 1%;
 border-radius: 8px;
 border:1px solid #e7e7e7; 
  
}
.input{
  width:80%;
  height: 100%;
  
  float: left;
}
.inputhuan{
  width: 20%;
  height: 100%;
  float:right;
 
}
.inputhuan img{
  margin-top: 5vh;
    width: 4vh;
    height: 4vh;
    size:100% 100%;

}
{

  background: #f1f1f1;
}
.inputB{
  height: 7vh;
  line-height: 7vh;
  margin-left: 5vw;
  color: #a9a9ae;
  display: block;
  text-decoration: none;
  
}
.IMG{
  margin-top: 1.2vh;
  width: 28px;
  height:30px;
  background-image:url(../../assets/22-52-25.png);
  background-position:204% 100% ;
  background-size:300% 100%;
   margin-left: 5vw;
 margin-right: 5vw;
  float: left;

}
.IMG2{
   margin-top: 1.2vh;
   margin-left: 5vw;
    margin-right: 5vw;
  width: 28px;
  height:30px;
  background-image:url(../../assets/22-52-25.png);
  background-position:0% 0% ;
  background-size:300% 100%;

  float: left;

}
.inputgang{
  width: 60%;
  height: 1px;
  margin-left:12vh;
  background: #666;
}
.btn{
  margin-top: 1.5vh;
  border-radius: 10px;
  width: 96vw;
  height: 7vh;
  margin-left: 2vw;
  background: #ff4a39;
  text-align: center;
  line-height: 7vh;
  font-size: 24px;
  color: white;
}
</style>
1