<template>
 
  <div>
      <div class="top">
       <div class="topfan" @click="xifan()">返回</div>
       <div>车辆详情</div>
      </div>
      <div class="topnext">
        <div class="next">
          <div class="nextleft">
              <img src="../../assets/22-50-25.png">
          </div>
          <div class="nextright">
            <div>司机</div>
              <div>转车</div>
          </div>
        </div>
      </div>
      <div class="tbody">
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {  
      waylist:[]
    }
  },
  methods:{
    kuai(){
       let k=this.$route.query.id
       console.log(k);
        this.$ajax.get("http://localhost/getdian.php?bus="+k).then((res)=>{
               console.log(res);
               this.waylist = res.data
                console.log(this.waylist);
            })
    },xifan(){
       window.history.go(-1);
    }
  },mounted(){
    this.kuai()
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.next{
  width: 100%;
  height: 12vh;

}
.nextleft img{
  width: 100%;
  height: 100%;
}
.nextleft{
  float: left;
  margin-left: 5vw;
  width: 12vh;
  height: 12vh;
 
}
.nextright{
  float: right;

  width: 70vw;
  height: 12vh;
 
}
.topfan{
  position: absolute; 
  color: white; 
  left: 2vw;
}
.top{
  color: white; 
  width: 100VW;
  height: 7vh;
  line-height: 7vh;
  background: #ff4a39;
  position: fixed;
  text-align: center;
  top: 0;
}
.topnext{
  width: 100vw;
  height: 30vh;
  background: white;
}
.tbody{
  width: 100vw;
  height: 63vh;
  z-index: 150;
  background: white;
  position: fixed;
  top: 37vh;

}
</style>
