<template>
  <!-- Header -->
  <the-navigation />
  <router-view />
</template>

<script lang="ts">
import TheNavigation from "@/components/TheNavigation.vue";
export default {
  components: { TheNavigation },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  animation: test 0.3s ease-in;
}
img {
  box-shadow: 0 10px 3px 0 rgb(0 0 0 / 16%), 0 35px 38px 0 rgb(0 0 0 / 19%);
}

.smooth-anim {
  animation: smooth 0.4s both;
}
.flex {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
@media (max-width: 800px) {
  .flex {
    flex-flow: column wrap;
  }
}
@keyframes test {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes smooth {
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
  }
}
button {
  cursor: pointer;
}
.loader {
  border: 5px solid #f3f3f3; /* Light grey */
  border-top: 5px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
  margin: 5rem auto;
  margin-bottom: 0px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
