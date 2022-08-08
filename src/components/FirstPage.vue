<template>

    
    <div >

        <div class="flex w-full flex-col" v-if="notloading">
            <div class="text-white"><p>🚀 Inspect GitHub's followers/unfollowers with visualizations and stats.</p></div>
           
                <!-- <input  v-model="getusername" type="username" @keyup.enter="emitUsername" id="inputusername" 
            
            class="focus:ring-indigo-500 focus:border-indigo-500   text-lg rounded-md" 
            
            placeholder="@username"> -->
            <div class="flex justify-center">
            <div>
            <vs-input @keyup.enter="emitUsername" v-model="getusername" placeholder="username">

                
                <template  v-if="!getusername" #message-danger>
                    <div class="flex w-full self-start">
                    Required
                    </div>
                </template>

                <template #icon>
                 <font-awesome-icon icon="fa-solid fa-user" />
                </template>

             </vs-input>
             </div>
            
        
           
            <!-- <button type="button"  class="transition duration-500 ease-in-out bg-green-400 text-white hover:bg-gray-400 transform hover:-translate-y-1 hover:scale-110 " @click="emitUsername" >
                Go
            </button> -->
            <div>
            <vs-button
           
                circle
                class=""
                color="rgb(59,222,200)"
                gradient
                :active="active == 1"
                @click="emitUsername"
            >
                Go
             </vs-button>
             </div>
         
            </div>
        </div>
        <div v-else>
            <Animation/>
        </div>
    </div>
</template>
<script>
import Animation from '@/components/Animation.vue'
export default {
    name:'first page',
    components: {
    Animation
  },
    data(){
        return {
            getusername:'',
            notloading:true
        }
    },
    props:{
      
        changePagetofirst: Function
    },
    methods:{
        emitUsername(){
            this.notloading=false
            this.changePagetofirst(this.getusername)
        }
    }

}
</script>
<style scoped>
.first-container{
    
  display: inline-block;
  text-align: center;
  font-size: 12;
}
p{
    font-style: italic;
}

/* button{
    
   font-size: 0.5rem;
   width:30px;
   height:20px;
   border-radius: 20px;
} */

label{
    padding: 0 !important;
    margin-bottom: 0 !important;
    margin: 0 !important;
}
.bottom:hover{
    background-color: grey;
}

.vs-input {
    width: 100% !important;
}
</style>