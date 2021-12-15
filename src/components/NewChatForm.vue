<template>
  <fom>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="hadleSubmit"
    >
    </textarea>
    <!-- when i press enter fire function handlesubmit -->
  </fom>
</template>

<script>
import { timestamp } from "../firebase/config";
import { ref } from "vue";
import getUser from "../composables/getUser";
export default {
  setup() {
    const message = ref("");
    const { user } = getUser();

    const hadleSubmit = async () => {
      //when ress enter create chat object
      //we create new chat object
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };
      console.log(chat);
      message.value = "";
    };

    return { hadleSubmit, message };
  },
};
</script>

<style scoped>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
</style>
