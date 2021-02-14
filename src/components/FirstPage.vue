<template>
    
    <div class = "first-container">
        <div><p>Lets raid who unfollows you!</p></div>
        <input type="username" class="form-control" id="inputusername" placeholder="@username">
        <button type="button" class="btn btn-dark">Go</button>
    </div>
</template>

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
input:focus, textarea:focus, select:focus{
        outline: none;
    }
button{
    
   font-size: 9px;
    border-radius: 20px;
}
</style>