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
import useSingup from "../composables/useSingup";
export default {
  setup() {
    const { error, singup } = useSingup();
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await singup(email.value, password.value, displayName.value);
      console.log("user sing up");
    };

    return { displayName, email, password, handleSubmit };
  },
};
</script>

<style></style>
