<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link
      :to="{
        name: 'DetailPage',
        params: { slug: location.slug },
      }"
      v-for="location in store.destinations"
      :key="location.name"
    >
      {{ location.name }}
    </router-link>
    |

    <router-link :to="{ name: 'LoginPage' }" v-if="isLogged !== '1'"
      >Login</router-link
    >
    <router-link :to="{ name: 'AdminHome' }" v-if="isLogged === '1'"
      >Admin</router-link
    >
    <router-link :to="{ name: 'LogoutPage' }" v-if="isLogged === '1'"
      >Logout</router-link
    >
  </nav>
</template>

<script setup lang="ts">
import store from "@/data/store";
import { ref } from "vue";
const isLogged = ref(localStorage.getItem("is_logged"));
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 5px 15px;
  margin: 0px 5px;
  text-decoration: none;
  transition: all ease-in-out 0.5s;
  border-radius: 10px 0 10px 0;
}
nav a:hover {
  background: #35c283bb;
  color: black !important;
}

nav a.vue-exact-class {
  color: #42b983;
}

@media (max-width: 800px) {
  nav {
    overflow-y: scroll;
  }
}
</style>
