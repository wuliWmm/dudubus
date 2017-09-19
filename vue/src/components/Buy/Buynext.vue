<template>
  <div class="hello">
    <div class="top">
    	<div class="top1" @click="dao()">
    		返回		
    	</div>
    	<div class="top2">
			<input type="text" class="form-control" id="exampleInputName2" 
			  <input type="text" class="form-control" placeholder="收地址" v-model="sotext">
    	</div>
    	<div class="socontent" v-show="text == true">
    		<div v-for="(ts,index) in textlist" @click="fan(ts.name)">
    			{{ts.name}}
    		</div>
    	</div>
    	<div class="top3" @click="soso()">
    		索索
    	</div>
    </div>
    <div id="container" ref="map"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      sotext:"",
      textlist:[],
      text:false
    }
  },methods:{
  		dao(){
  			window.history.go(-1);
  		},
  		fan(aa){
  			let num =this.$route.query.id;
  			//alert(aa);
  			this.text = false;
  			if(num == 1){
  				this.$store.commit("tihuan",aa);
  			}else{
  				this.$store.commit("tihuant",aa);

  			}
  			this.$refs.map.style.height = "60vh";
  			window.history.go(-1);

  		},
  		soso(){
  				this.$refs.map.style.height = "93vh";
  			 this.text = true
  			 this.$ajax.get("http://localhost/fuwu.php?name="+this.sotext).then((res)=>{
		        this.textlist = res.data.result;
		         console.log(this.textlist);
		      })
		      this.sotext = ""
  		},
      aaa(){
        
        var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}    
      
        var map = new BMap.Map("container");    
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);    
        // map.addControl(new BMap.NavigationControl());

        map.addControl(new BMap.NavigationControl(opts));
        map.setCurrentCity("北京"); 
        
        map.addEventListener("dragend", function(){    
       //地图中心点
        // var center = map.getCenter();    
        //  alert("地图中心点变更为：" + center.lng + ", " + center.lat);  

         });
        
    
      }
  },
  mounted(){
        this.aaa();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.socontent div{
	width: 100vw;
	height: 10vh;
	text-align:center;
	line-height: 10vh;
	font-size: 16px;
}
.socontent div{
	width: 100%;
	height: 8vh;
	margin-top: 0.5vh;
	background: white;
	border-radius: 10px;
	line-height: 8vh;
	background: #fff;

}
.socontent{
	color: #000;
	
	width: 70vw;
	height: 50vh;
	position: absolute;
	margin-top: 6vh;
	z-index: 1500;
	margin-left: 15vw;
	 overflow:auto;  
}
.top1{
	width: 20%;
	height: 100%;
	float: left;

}
.top2{
	width: 60%;
	height: 100%;
	float: left;
	
}
.top3{

	width: 20%;
	height: 100%;
	float: left;
}
.hello{
	position: fixed;
	z-index: 150;
	line-height: 6vh;
	font-size: 
}
.top{
	padding-top: 2vh;
  width: 100vw;
  height: 8vh;
  background:#ff4a39;
  margin-top: -8vh;
  margin-left: 0vw;
  font-size: 16px;
	color: white;
	text-align: center;
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
#container{

  margin-left: 0vw; 
  width: 100vw;
  height: 60vh;
}
</style>
