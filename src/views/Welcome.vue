<template>
  <div>
    <section class="showcase">
      <header>
        <h2 class="logo">event</h2>
        <div class="toggle active">
          <span @click="editProgect" class="material-icons">
            view_headline
          </span>
        </div>
      </header>
      <video class="video" src="@/assets/back.mp4" muted loop autoplay></video>
      <div class="overlay"></div>
      <div class="text">
        <h2>something</h2>
        <h3>Exploring</h3>
      </div>
      <div class="welcome container">
        <div v-if="showLogin">
          <LoginForm @login="enterChat" />
          <p>
            no account yet?
            <span @click="showLogin = false">Singup</span> instead
          </p>
          <h2>Login</h2>
        </div>
        <div v-else>
          <h2>Sing up</h2>
          <SingupForm @signup="enterChat" />
          <p>
            Already registered?
            <span @click="showLogin = true">Login</span> instead
          </p>
        </div>
      </div>
      <ul class="social">
        <li>facebook</li>
        <li>twiter</li>
        <li>instagram</li>
      </ul>
    </section>
    <div class="menu">
      <ul>
        <li><a href="">homr</a></li>
        <li><a href="">homr</a></li>
        <li><a href="">homr</a></li>
      </ul>
    </div>
  </div>

  <!--<!-->
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
  position: absolute;
}
.welcome form {
  width: 300px;
  margin: 20px auto;
}
.welcome label {
  display: block;
  margin: 20px 0 10px;
}
.video {
  opacity: 9;
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

.showcase {
  position: absolute;
  right: 0;
  width: 100%;
  min-height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
}

.showcase header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  text-transform: uppercase;
  cursor: pointer;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
}
.menu {
  display: none;
}
.toggle .active {
}
</style>
