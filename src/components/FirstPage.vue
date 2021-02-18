<template>
    
    <div class = "first-container">
        <div><p>Lets raid who unfollows you!</p></div>
        <input v-model="getusername" type="username" class="form-control" id="inputusername" placeholder="@username">
        <button type="button" class="btn btn-dark" @click="emitUsername">Go</button>
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
        //changePagetofirst:Function
        changePagetofirst: Function
    },
    methods:{
        emitUsername(){
            
            console.log(this.getusername,"giot")
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
    
   font-size: 9px;
   border-radius: 20px;
}
.bottom:hover{
    background-color: grey;
}
</style>