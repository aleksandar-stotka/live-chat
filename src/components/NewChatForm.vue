<template>
  <fom>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
    </textarea>
    <div class="error">{{ error }}</div>
    <!-- when i press enter fire function handlesubmit -->
  </fom>
</template>

<script>
import { timestamp } from "../firebase/config";
import { ref } from "vue";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    const { user } = getUser();
    const { addDoc, error } = useCollection("message");
    const message = ref("");

    const handleSubmit = async () => {
      //when ress enter create chat object
      //we create new chat object
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      };

      await addDoc(chat).then((message.value = ""));
    };

    return { handleSubmit, message, error };
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
