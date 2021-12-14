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
    <div class="error">{{ error }}</div>
    <button>Sing up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSingup from "../composables/useSingup";
export default {
  setup(props, context) {
    const { error, singup } = useSingup();
    //refs
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      await singup(email.value, password.value, displayName.value);
      if (!error.value) {
        context.emit("signup"); /// emit event to listein in welcome component
      }
    };

    return { displayName, email, password, handleSubmit, error };
  },
};
</script>

<style></style>
