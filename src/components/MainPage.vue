<template>
<div class = "main-div" >
    <div class="row">
    <div class="column">
      <div>
        <p style="font-size:7px">TOTAL FOLLOWERS</p>
        <h5 style="padding:0">{{ this.apiData.totalfollowers }}</h5>
      </div>
    </div>
    <div class="column">
        <p style="font-size:7px">TOTAL NEWFOLLOWERS</p>
        <h5>{{ this.apiData.totalnewfollowers }}</h5>

    </div>

    <div class="column">
        
        <p style="font-size:7px">TOTAL UNFOLLOWERS</p>
        <h5>{{ this.apiData.totalunfollowers }}</h5 >
    </div>
    </div>
           <div>
           <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <b-table table :items="finalFollowers" style="font-size:6px;"></b-table>
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

        //Structure Example of Provided data
        /*items: [
          { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
          { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
          { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
          { Newfollowers: 'wajahtkarim4' },
          
        ]*/
      }

    },
    methods:{
      structuredFollowers(){
        if(this.apiData.totalnewfollowers==0){
          this.apiData.newfollowers=[];
        }

        if(this.apiData.totalunfollowers == 0){
          this.apiData.unfollowers=[];
        }
        var maxLength = Math.max(this.apiData.totalnewfollowers,this.apiData.totalunfollowers)
        for (var i = 0; i < maxLength; i++) {

            this.finalFollowers.push({Newfollowers:this.apiData.newfollowers[i],Unfollowers:this.apiData.unfollowers[i]})
            
        }
      }
    },
    mounted(){
     
      this.avatarchange(this.apiData.avatar_url)
      this.structuredFollowers()
    }
    
}
</script>

<style scoped>

.column{
  padding:0;
  margin:0;
  float: left;
  width: 32%;
  color:#707070;
  font-size:6;
  padding-left:10px;
  padding-right:10px;

}
h5{
  font-size:9px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  margin:0;
  padding:0;
  clear: both;
}
.b-table{
  border:none
}
</style>