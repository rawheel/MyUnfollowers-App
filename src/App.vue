<template>
  <div id="app" class = 'bg-white w-full h-screen font-sans md:font-serif md:justify-self-center'>
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button class="nav-link" @click="home" style="color:white;border:none">Home </button>
      </nav>
    </div>

    <div class="grid justify-items-center">
    <div class="question-box-container">
    <div class="name-head" >
      <h1 style="font-size:2rem">MyUnfollowers</h1>
      <p><a href="https://github.com/rawheel" style="color:black;font-size:0.7rem" target="_blank">by Raheel Siddiqui</a></p>
    
    
    </div>
    <div class="bg-gray-100 shadow-md rounded md:rounded-full pt-6 pb-8 mb-4 flex flex-col my-2">
    
      <div class = "github-img">
          <img id="github" :src="avatar">
      </div>
      <h4><a :href="gitURL" style="color:#343A40;font-size:1rem" target="_blank">{{ gitUsername }}</a></h4>
      <div style="padding-right:30px;padding-left:30px">
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
    Registered,

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
          
          }
////////////////////////////////////////////////////////////////////
      else{
        this.gitUsername = username;
        this.gitURL =`https://github.com/${username}`
      
      }

      
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
            
              }
      });
///////////////////////////////////////////////////////////////////
          
    },
//This method used to everything set back as it was and bring user to home
    home(){
      this.gitUsername='',
      this.gitURL='',
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
.question-box-container{
  display: inline-block;
  text-align: center;
  
  
}
h4{
  margin-top:2px;
  font-style:italic;
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

.github-img img{

    display: inline-block;
  text-align: center;
  margin-top:2%;
  border-radius:50%;    
  width:15%;
  height:auto;
    
}

.pages{
  margin-top:5%
}

</style>
