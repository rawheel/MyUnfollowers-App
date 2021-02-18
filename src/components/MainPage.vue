<template>
<div class = "main-div" >
    
      
    
    <div class="row">
    <div class="column">
        <p>TOTAL FOLLOWERS</p>
        <h1>{{ this.apiData.totalfollowers }}</h1>
    </div>
    <div class="column">
        
       <div>
            <b-table table :items="finalFollowers" style="font-size:11px;"></b-table>
        </div>
    </div>

    <div class="column">
        <p>TOTAL NEWFOLLOWERS</p>
        <h1>{{ this.apiData.totalnewfollowers }}</h1>
        <p>TOTAL UNFOLLOWERS</p>
        <h1>{{ this.apiData.totalunfollowers }}</h1>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        apiData:Object,
        avatarchange: Function
    },
    data() {
      return {
        
        finalFollowers:[],
        items: [
          { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
          { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
          { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
          { Newfollowers: 'wajahtkarim4' },
          
        ]
      }

    },
    methods:{
      structuredFollowers(){
        if(this.apiData.totalnewfollowers==0){
          console.log("22",this.apiData.totalnewfollowers ,this.apiData.totalunfollowers);
          this.apiData.newfollowers=[];
        }

        if(this.apiData.totalunfollowers == 0){
          console.log("33",this.apiData.totalnewfollowers, this.apiData.totalunfollowers);
          this.apiData.unfollowers=[];
        }
        var maxLength = Math.max(this.apiData.totalnewfollowers,this.apiData.totalunfollowers)
        for (var i = 0; i < maxLength; i++) {

            this.finalFollowers.push({Newfollowers:this.apiData.newfollowers[i],Unfollowers:this.apiData.unfollowers[i]})
            console.log({Newfollowers:this.apiData.newfollowers[i],Unfollowers:this.apiData.unfollowers[i]});
            //Do something
        }
      }
    },
    mounted(){
      console.log(this.apiData.avatar_url,this.apiData.totalfollowers)
      this.avatarchange(this.apiData.avatar_url)
      this.structuredFollowers()
    }
    
}
</script>

<style scoped>

h1,p{
  color:#707070;
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