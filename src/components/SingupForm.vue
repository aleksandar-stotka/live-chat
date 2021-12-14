<template>
  <form class="form" @submit.prevent="handleSubmit">
    <input
      type="text"
      required
      placeholder="display name"
      v-model="displayName"
    />
    <input type="email" required placeholder="email" v-model="email" />
    <input type="password" required placeholder="password" v-model="password" />
    <button>Sing up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    //refs
    const displayname = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(displayname.value, email, password.value);
    };

    return { displayname, email, password, handleSubmit };
  },
};
</script>

<style></style>
