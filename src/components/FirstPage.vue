<template>
    
    <div class = "first-container">
        <div><p>Lets raid who unfollows you!</p></div>
        <input  v-model="getusername" type="username" @keyup.enter="emitUsername" id="inputusername" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="@username">
        <button type="button" class="btn btn-dark" @click="emitUsername" >
            
            Go
            </button>
    </div>
</template>
<script>
export default {
    data(){
        return {
            getusername:''
        }
    },
    props:{
      
        changePagetofirst: Function
    },
    methods:{
        emitUsername(){
            
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
input{
    background-color: rgba(245,245,245,1);
    outline: 0;
    border-radius: 0px;
    border-width: 0 0 1px;
    border-color: black;
    
    width:200px;
    font-size: 12px;
    height:auto;
     margin:25px;
     margin-bottom:10px
}

button{
    
   font-size: 0.5rem;
   border-radius: 20px;
}
.bottom:hover{
    background-color: grey;
}
</style>