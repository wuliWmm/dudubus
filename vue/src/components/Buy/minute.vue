<template>
  <div class="hello">
   
    <div class="minute-top">
      车辆信息
       <div @click="minutefan" class="minutefan">返回</div>
    </div>
    <div class="minute-title">
      <div class="minute-title-left" @click="left(1)">
        开通
      </div>
      <div class="minute-title-right" @click="left(2)">
        待开通
      </div>
    </div>
    <div class="minute-body">
      <div class="minute-body-left" v-show="bodyview == true">
      <!-- 车辆次数 -->
        <router-link :to="{path:'/byby',query:{id:is.busid}}" class="busline" v-for="(is,insex) in linebus">
          <div  class="busline-top">
            {{is.busname}}({{is.busid}})
          </div>
           <div  class="busline-buttom">
             <div>
               <span class="sss">上</span><span>{{is.start}}</span>
             </div>
              <div>
               <span  class="eee">下</span><span>{{is.end}}</span>
             </div>
           </div>
        </router-link>
      </div>
       <div class="minute-body-right" v-show="bodyview == false">
        等待研发中
      </div>
    </div>
    <div class="btnxia">
        <span>发起我的定制班线</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bodyview:true,
     strname:"",
     endname:"",
     linebus:[] 
     
    }
  },methods:{
    doing(){
       this.strname = this.$store.state.start;
      this.endname = this.$store.state.end;
      this.$ajax.get("http://localhost/getlinefen.php?start="+this.strname+"&end="+this.endname).then((res)=>{
          console.log(res)
          this.linebus = res.data;
      })
    },
  		 minutefan(){
         window.history.go(-1);
    },left(i){
      if(i == 1){
        this.bodyview = true;
      }else{
        this.bodyview = false;
      }
    }
    
  },
  mounted(){
          this.doing()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btnxia{
  height: 10vh;
  width: 100%;
  top: 90vh;
  background: #ff4a39;
    position: fixed;
    z-index: 150;
    line-height: 10vh;
    text-align: center;
    font-size: 20px;
    color: white;
    border: 1px solid red;
    border-radius: 10px;
}
.sss{
  background: red;
  color: white;
}
.eee{
  background: green;
  color: white;
}
.busline-buttom span{
  margin-left: 5vw;
}
.busline-buttom{
  width: 100%;
  height: 12vh;
  line-height: 6vh;
  font-size: 20px;
  padding-left: 10vw;
  background: white;
}
.busline-top{
  width: 100%;
  height: 4vh;
  background: #ccc;
  line-height: 4vh;
  font-size: 16px;
  font-weight: bold;
    text-align: center;
}
.busline{
  margin-top: 2vh;
  overflow: hidden;
  width: 100%;
  height: 16vh;
  border-radius: 10px;
  border:1px solid #ccc; 
}
  .minute-body-left{
    width: 100%;
    height: 100%; 
     overflow:auto;  
  }
    .minute-body-right{
    width: 100%;
    height: 100%;  
     overflow:auto;  
  }
  .minute-body{
    width: 100%;
    height: 77vh;
    background: #0ff;
    top: 13vh;
    position: fixed;
    z-index: 150;
  }
  .minute-title{
    width: 100vw;
    height: 5vh;
  }
  .minute-title div{
    float: left;
    width:50%;
    height: 100%;
    text-align: center;
  }
  .minute-title div:hover{
    color: red;
  }
  .minute-top{
  width: 100vw;
  height:  7vh;
  line-height: 7vh;
  text-align: center;
  background:#ff4a39;
  color: white;
  position: fixed;
  top: 0;
}
.minutefan{
  position: absolute;
  top: 0.1vh;
  left: 3vw;
  color: white;
  line-height: 7vh;
  height: 7vh;
}
.minute{
  width: 100vw;
  height: 100vh;
  background: #ccc;
  position: fixed;
  z-index: 150;
  top: 0;
}
</style>
