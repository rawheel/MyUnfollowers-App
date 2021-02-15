<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-dark bg-dark" style="width:100%">
        <a class="nav-link" href="https://github.com/rawheel" target="_blank" style="color:white;">Home </a>
      </nav>
    </div>
    <div class="main-container">
    <div class="name-head">
      <h1>MyUnfollowers</h1>
      <a href="https://github.com/rawheel" style="color:black;" target="_blank">by Raheel Siddiqui</a>
    </div>
    <div class="jumbotron">
      <div class = "github-img">
          <img v-if="gitimg" id="github" :src="avatar">
      </div>
      <div class="hr-container">
        <hr>
      </div>
        <div class = "pages" >

          <div v-if="isFirst">
            <FirstPage
            :ischange="ischange"
            />
          </div>

          <div v-if="isMain">
            <MainPage
            :avatarchange="avatarchange"

            />
          </div>

              
        </div>
    </div>
    
  </div>
    
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    FirstPage,
    MainPage
  },
  
  data(){
    return {
    isFirst: true,
    isMain:false,
    gitimg:true,
    avatar:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    imggg:"https://avatars.githubusercontent.com/u/47301347?v=4"
    }
  },
  methods:{
    ischange(){
      this.isFirst = false
      this.isMain =true
    },
    avatarchange(name){
      this.avatar=name
    }
  }
  }

</script>

<style scoped>
*{
  color:#707070,
  
}
#app{
  font-family: 'Segoe UI';
}

.jumbotron{
  padding:0;
  padding-bottom: 2.5%;
  margin-top:3%;
  margin-left:18%;
  margin-right: 18%;
  border-radius:40px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.161));
  height:auto;
  background-color: rgba(245,245,245,1);

}


.main-container {

  display: inline-block;
  text-align: center;
  width:1200px;
  height:auto;
  padding: 0;
  margin-left: 8%;
  margin-right: 8%;
}

.github-img img{

    display: inline-block;
  text-align: center;
  margin-top:2%;
  border-radius:50%;

 
    
    
    width:12%;
    height:auto;
    
}
.hr-container{
  padding: 0;
  margin: 0;
  display: inline-block;
  text-align: center;
  width:80%;

}
.pages{
  margin-top:5%
}

</style>
