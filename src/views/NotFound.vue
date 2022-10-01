<template>
  <div>
    <h2>Oops!</h2>
    <h3>The resource you are looking for does not exist!</h3>
    <router-link :to="{ name: 'home' }">Go home</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h1 {
  color: yellow;
  background: red;
  padding: 0 20px;
  width: fit-content;
  margin: 0 auto;
}
</style>
