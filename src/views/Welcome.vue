<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <LoginForm @login="enterChat" />
      <p>
        no account yet? <span @click="showLogin = false">Singup</span> instead
      </p>
      <h2>Login</h2>
    </div>
    <div v-else>
      <h2>Sing up</h2>
      <SingupForm @signup="enterChat" />
      <p>
        Already registered? <span @click="showLogin = true">Login</span> instead
      </p>
    </div>
  </div>
</template>

<script>
import SingupForm from "@/components/SingupForm";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    SingupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);
    const router = useRouter();
    const enterChat = () => {
      router.push({ name: "Chatroom" });
    };

    return {
      showLogin,
      enterChat,
    };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
  width: 30rem;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1 px solid #eee;
  outline: none;
  color: rgb(22, 13, 1);
  margin: 10px auto;
}
.welcome span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
}
.welcome button {
  margin: 20px auto;
}
</style>
