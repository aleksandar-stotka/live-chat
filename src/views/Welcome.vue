<template>
  <div class="welcome container">
    <SingupForm />
    <LoginForm />
  </div>
</template>

<script>
import SingupForm from "@/components/SingupForm";
import LoginForm from "../components/LoginForm.vue";
export default {
  components: {
    SingupForm,
    LoginForm,
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
.welcome form {
  width: 300px;
  margin: 20px 0 10px;
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
  color: antiquewhite;
  margin: 10px auto;
}
</style>
