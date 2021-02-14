<template>
    <div class = 'main'>
        
           <p class="username" style="text-align:center;">@rawheel</p>

    </div>
</template>

<script>

export default {
    data(){
        return{
        username : 'rawheel',
        totalFollowers:0,
        newFollowers:[],
        unFollowers:[],
        totoalnewFollowers:0,
        totalUnFollowers:0,

        }
    },
    methods:{
        githubApiData(){
            fetch('https://myunfollowersapi.herokuapp.com/github/?username='+this.username)
            .then(response => {
                console.log(response)
                })
        }
    },
 
}
 /*    <header>
            <a href="https://github.com/" target="_blank">Home</a>
        </header>
        <div class="main-column">
        <div id="MyUnFollowers__by_Raheel_Siddi">
                <span>MyUnFollowers </span>
                <a href="https://github.com/rawheel" target="_blank" ><p style="font-style:normal;font-weight:normal;font-size:12px; color:rgba(112,112,112,1);">by Raheel Siddiqui</p> </a>
        </div>
        <div class = "container">

            <div class = "github-img" style="height:10%;margin-top:15px">
                <img id="github" src="@/assets/github.png">
            </div>
            <hr>
            <File/>
            
           
            
           
            
            
        </div>
        </div>
        .username {
    text-align:center;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    color: rgba(112,112,112,1);
}

hr{
    margin-top:20px;
margin-left: 10%;
margin-right: 10%;
 
    width: 80%;
    
}
.main-column{
   display: inline-block;
   vertical-align: top;
    margin-left:25%;
    margin-right:25%;

}
#MyUnFollowers__by_Raheel_Siddi {

		
		position: absolute;
		overflow: visible;
        
        margin-left: 15%;
        margin-top:30px;

		text-align: center;
		font-family: Segoe UI;
		font-style: normal;
		font-weight: bold;
		font-size: 56px;
		color: rgba(112,112,112,1);
	}
a{
    text-decoration: none;

    margin-left: 25px;
    font-size: 26px;
    color:white;
    font-weight:bold;
}
a:hover{
    text-decoration: none;

    color:white;
}
a:active{
    color:none;
}
.github-img{
        display:flex;
  justify-content: center;
  align-items: top;
    
}

.container{

    border-radius: 40px;
    background-color: rgba(245,245,245,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
    position: absolute;
    overflow: visible;
    width: 70%;
    height: 60%;

margin-top:10%;
/*margin-left:15%;
margin-right:15%;
    

    
}
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: sans-serif;
}
header {
  display:flex;
  justify-content: left;
  align-items: left;
  padding:15px;
  background-color: #212121;
  color:#FFF;
}*/
</script>

<style scoped>

.username {
    text-align:center;
    font-family: Segoe UI;
    font-style: normal;
    font-weight: bold;
    font-size: 33px;
    color: rgba(112,112,112,1);
}

</style>



  