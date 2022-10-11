<template>
<div class = "flex flex-col text-gray-400 w-4/5" >
    <div class="flex space-x-2 w-full justify-between px-4">
    <div class="grid justify-items-center" >

        <p class="text-xs">FOLLOWERS</p>
        <p style="padding:0">{{ this.apiData.totalfollowers }}</p>
    </div>
    <div class="grid justify-items-center">
        <p class="text-xs">NEWFOLLOWERS</p>
        <p>{{ this.apiData.totalnewfollowers }}</p>

    </div>

    <div class="grid justify-items-center">
        
        <p class="text-xs">UNFOLLOWERS</p>
        <p>{{ this.apiData.totalunfollowers }}</p >
    </div>
    </div>
      <div class="md:px-4">

            <Table :data="finalFollowers"/>
        
      </div>
  </div>
</template>

<script>
import Table from '@/components/Table.vue'
export default {
  components:{
        Table
        },
    props:{
        apiData:Object,
        avatarchange: Function
    },
    data() {
      return {
        
        finalFollowers:[],

        //Structure Example of Provided data
        // items: [
        //   { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
        //   { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
        //   { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
        //   { Newfollowers: 'wajahtkarim4' },
        //   { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
        //   { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
        //   { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
        //   { Newfollowers: 'wajahtkarim4' },
        //   { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
        //   { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
        //   { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
        //   { Newfollowers: 'wajahtkarim4' },
        //   { Newfollowers: 'waleed01', Unfollowers: 'osama12'  },
        //   { Newfollowers: 'shahzaibawan12' ,Unfollowers: 'osama12'},
        //   { Newfollowers: 'iqra45' ,Unfollowers: 'rawheel' },
        //   { Newfollowers: 'wajahtkarim4' },
          
        // ]
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

/* .column{
  padding:0;
  margin:0;
  float: left;
  width: 32%;
  color:#707070;
  font-size:6;
  padding-left:10px;
  padding-right:10px;

} */
h5{
  font-size:0.5rem;
}

/* Clear floats after the columns */
/* .row:after {
  content: "";
  display: table;
  margin:0;
  padding:0;
  clear: both;
} */
.b-table{
  border:none
}
</style>