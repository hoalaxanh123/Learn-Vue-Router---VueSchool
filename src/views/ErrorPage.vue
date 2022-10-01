<template>
  <div>
    <h2>Oops!</h2>
    <h3>There are something wrong when process you request!</h3>
    <router-link :to="{ name: 'home' }">Go home</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
h1 {
  color: yellow;
  background: red;
  padding: 0 20px;
  width: fit-content;
  margin: 0 auto;
}
</style>
