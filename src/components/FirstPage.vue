<template>
  <div class="first-container">
    <div v-if="notloading">
      <div><p>Lets raid who unfollows you!</p></div>

      <input
        v-model="getusername"
        type="username"
        @keyup.enter="emitUsername"
        id="inputusername"
        class="
          focus:ring-indigo-500 focus:border-indigo-500
          block
          w-full
          pl-7
          pr-12
          sm:text-sm
          border-gray-300
          rounded-md
        "
        placeholder="@username"
      />
      <button
        type="button"
        class="
          transition
          duration-500
          ease-in-out
          bg-gray-900
          text-white
          hover:bg-gray-400
          transform
          hover:-translate-y-1 hover:scale-110
          ...
        "
        @click="emitUsername"
      >
        Go
      </button>
    </div>
    <div v-else>
      <Animation />
    </div>
  </div>
</template>
<script>
import Animation from "@/components/Animation.vue";
export default {
  name: "first page",
  components: {
    Animation,
  },
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
input {
  background-color: rgba(245, 245, 245, 1);
  outline: 0;
  border-radius: 0px;
  border-width: 0 0 1px;
  border-color: black;

  width: 200px;
  font-size: 12px;
  height: auto;
  margin: 25px;
  margin-bottom: 10px;
}

button {
  font-size: 0.5rem;
  width: 30px;
  height: 20px;
  border-radius: 20px;
}
.bottom:hover {
  background-color: grey;
}
</style>