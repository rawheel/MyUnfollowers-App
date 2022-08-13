<template>
    <div >

        <div class="grid w-full justify-items-center" >
            <div class="md:text-sm mx-10 text-center text-white text-xs ">🚀 Inspect GitHub's followers/unfollowers with visualizations and stats.</div>

            <div class="flex justify-center mt-4">
            <div>
            <vs-input
            color="#7d33ff"
            gradient
             @keyup.enter="emitUsername" 
             v-model="getusername" 
             placeholder="username">

                
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
            
            <div>
            <vs-button
           
                circle
                :loading= "!notloading"
                color="#7d33ff"
                gradient
                @click="emitUsername"
            >
                Go
             </vs-button>
             </div>
         
            </div>
        </div>
    </div>
  
</template>
<script>

export default {
  name: "first page",

  data() {
    return {
      getusername: "",
      notloading: true,
    };
  },
  props: {
    changePagetofirst: Function,
  },
  methods: {
    emitUsername() {
      this.notloading = false;
      this.changePagetofirst(this.getusername);

      if (this.getusername == "" || this.getusername == null) {
        this.toast("danger");
        this.notloading = true;
      }
    },

    toast(variant = null) {
      this.$bvToast.toast(`The username cannot be empty!`, {
        title: `There was a Problem`,
        variant: variant,
        solid: true,
        autoHideDelay: 5000,
      });
    },
  },
};
</script>
<style scoped>
.first-container {
  display: inline-block;
  text-align: center;
  font-size: 12;
}
p {
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
.bottom:hover {
  background-color: grey;
}

.vs-input {
    width: 100% !important;
}
</style>