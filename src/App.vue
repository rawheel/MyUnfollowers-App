<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <a class="nav-link" href="https://github.com/rawheel" target="_blank" style="color:white;">Home </a>
      </nav>
    </div>
    <div class="main-container">
    <div class="name-head">
      <h1>MyUnfollowers</h1>
      <p>by Raheel Siddiqui</p>
    </div>
    <div class="jumbotron">
      <div class = "github-img">
          <img id="github" src="@/assets/github.png">
      </div>
      <div class="hr-container">
        <hr>
      </div>
     
      <FirstPage/>
    </div>
    
  </div>
    
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue'

export default {
  name: 'App',
  components: {
    FirstPage
  }
}
</script>

<style scoped>
.jumbotron{
  margin-top:3%;
  margin-left:15%;
  margin-right: 15%;
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
  margin-left: 10%;
  margin-right: 10%;
}

.github-img img{

    position: absolute;
    top: 10px;
    max-width:3%;
    height:auto;
    
}
.hr-container{
  display: inline-block;
  text-align: center;
  width:80%;
}

</style>
