<template>
  <div id="app">
    <div>
      <nav class="navbar navbar-dark bg-dark" style="width:100%;margin:0;padding:0">
        <button class="nav-link" @click="home" style="color:white;background-color:#343A40;border:none">Home </button>
      </nav>
    </div>
    <div class="question-box-container">
  <b-jumbotron>
   

    <div class="main-container">
    <div class="name-head">
      <h1>MyUnfollowers</h1>
      <a href="https://github.com/rawheel" style="color:black;" target="_blank">by Raheel Siddiqui</a>
    </div>
    <div class="jumbotron">
      <div class = "github-img">
          <img id="github" :src="avatar">
      </div>
      <h2><a :href="gitURL" style="color:#343A40" target="_blank">{{ gitUsername }}</a></h2>
      <div class="hr-container">
        <hr>
      </div>
        <div class = "pages" >

          <div v-if="isFirst">
            <FirstPage
            :changePagetofirst="getApi"
            />
          </div>

          <div v-else-if="isMain">
            <MainPage
            :avatarchange="avatarchange"
            :apiData="apiData"

            />
          </div>
          <div v-else>
            <Registered
            :registeredMessage="registeredMessage"
            />

          </div>

              
        </div>
    </div>
    
  </div>
    </b-jumbotron>
    </div>
    
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue'
import MainPage from './components/MainPage.vue'
import Registered from './components/Registered.vue'
export default {
  name: 'MyUnfollowers',
  components: {
    FirstPage,
    MainPage,
    Registered
  },
  
  data(){
    return {
    gitUsername:'',
    gitURL:'',
    isFirst: true,
    isMain:false,
    registeredMessage:'',
    apiData:{},
    newuser:false,
    avatar:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    
    }
  },
  computed:{

    //this.getApi()
    
  },
  methods:{

    getApi(username){
     
/////////////////////////////////////////////////////////////////////
     //calling API
      this.$api.myunfollowersapi.githubAPI(username)
    .then((response) => {
      this.apiData = response.data
/////////////////////////////////////////////////////////////////////
   

/////////////////////////////////////////////////////////////////////
      // if the user is new so this statement runs
      if ('message' in this.apiData){
          this.newuser=true
          this.registeredMessage = `Hey ${username}! your username & followers have been saved for latter use!`
          this.gitUsername = username;
          this.gitURL =`https://github.com/${username}`
          console.log("yeah new user",this.apiData.message)
          }
////////////////////////////////////////////////////////////////////
      else{
        this.gitUsername = username;
        this.gitURL =`https://github.com/${username}`
      
      }

      console.log(this.apiData)
      this.changePage()
          
      })

///////////////////////////////////////////////////////////////////
      // IF THERE IS BAD REQUEST 404 or Error
      .catch(error => {
          // error.response can be null
          if (error.response && error.response.status === 400) {
            this.newuser=true
            this.registeredMessage = "Max Retries exceeded with URL or Invalid Username! take a break man..."
            this.changePage()
            console.log('errorrr');
              }
      });
///////////////////////////////////////////////////////////////////
          
    },
//This method used to everything set back as it was and bring user to home
    home(){
      this.avatarchange("https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png")
      this.isFirst=true;
      this.newuser =false;
      this.isMain =false
    },

// This method used to changing pages
   changePage(){
      this.isFirst = false
      if (!this.newuser){
        this.isMain =true
      }
    },

    avatarchange(name){
      this.avatar=name
    }
  } 
  }

</script>

<style scoped>
h2{
  margin-top:2px;
  color:#343A40;
  font-style:italic;
  font-size:22px;
 
  
}
.name-head{
  margin-top:2.5%;
}
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
  margin-left: 15%;
  margin-right: 15%;
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
