<template>
  <div  class = 'absolute overflow-hidden bg-gray-800 w-full h-full top-0 right-0 left-0 bottom-0 md:justify-self-center'>
    
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button class="nav-link" @click="home" style="color:white;border:none">Home </button>
      </nav>
    </div>

    <div class="flex justify-center w-full h-full">
    <div >
    <div class="text-white grid justify-items-center w-full " >
      <div class="mt-4 text-4xl">My Unfollowers</div>
      <div ><a class="text-green-400" href="https://github.com/rawheel" target="_blank">by Raheel Siddiqui</a></div>
    
    
    </div>
    <div class="bg-gray-900 md:mx-0 mx-4 shadow-md rounded md:rounded-full pt-6 pb-8 mb-4 flex flex-col my-2 ">
    
      <div class = "github-img flex justify-center w-full h-full">
          <img id="github" :src="avatar">
      </div>
      <div class="flex justify-center w-full h-full mt-2"><a :href="gitURL" class="text-2xl   text-white" target="_blank">{{ gitUsername }}</a></div>
      
        <hr class="bg-gray-400 mx-4 my-4">
    
        <div >

          <div v-if="isFirst">
            <FirstPage
            :changePagetofirst="getApi"
            />
          </div>

        

          <div v-else-if="isMain" class="flex justify-center">
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


.github-img img{

    display: inline-block;
  text-align: center;
  margin-top:2%;
  border-radius:50%;    
  width:15%;
  height:auto;
    
}



</style>
