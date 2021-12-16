<template>
  <div class="chat-window">
    <div v-if="error">{{ error }} hwloo</div>
    <div class="messages" v-if="documents">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="created-at">
          {{ doc.createdAt }}
        </span>
        <span class="name">
          {{ doc.name }}
        </span>
        <span class="message"> {{ doc.message }} </span>
        <div class="test">
          jas sum test
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
export default {
  setup() {
    const { error, documents } = getCollection("messages");

    return { error, documents };
  },
};
</script>

<style scoped>
span {
  color: rgb(138, 18, 18);
}
</style>
