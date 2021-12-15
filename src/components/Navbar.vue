<template>
  <nav>
    <div>Hey there... display name</div>
    <p class="email">Currently logged in as...email</p>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from "@/composables/useLogout";
export default {
  setup() {
    const { logout, error } = useLogout();
    const handleClick = async () => {
      await logout();
      if (!error.value) {
        console.log("user logout");
      }
    };
    return { handleClick };
  },
};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
}

nav p.email {
  font-size: 14px;
  color: rgb(182, 22, 22);
}
</style>
