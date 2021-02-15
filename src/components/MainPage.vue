<template>
<div class = "main-div" >
    
      <h2>@rawheel</h2>
    
    <div class="row">
    <div class="column">
        <p>TOTAL FOLLOWERS</p>
        <h1>64</h1>
    </div>
    <div class="column">
        
       <div>
            <b-table table :items="items" style="font-size:14px; "></b-table>
        </div>
    </div>

    <div class="column">
        <p>TOTAL NEWFOLLOWERS</p>
        <h1>4</h1>
        <p>TOTAL UNFOLLOWERS</p>
        <h1>6</h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        ischangeGitimg:Function,
        avatarchange: Function
    },
    data() {
      return {
        
        
        items: [
          { NewFollowers: 'waleed01', UnFollowers: 'osama12'  },
          { NewFollowers: 'shahzaibawan12' ,UnFollowers: 'osama12'},
          { NewFollowers: 'iqra45' ,UnFollowers: 'rawheel' },
          { NewFollowers: 'wajahtkarim4' },
          
        ]
      }

    },
    mounted(){
      this.avatarchange("https://avatars.githubusercontent.com/u/47301347?v=4")
    }
    
}
</script>

<style scoped>

.main-div h1,p,h2{
  padding:0;
  margin:0;
  color:blue,
}
h2{
  
  margin-bottom:60px;
}
.column {
  float: left;
  width: 32%;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.b-table{
  border:none
}
</style>