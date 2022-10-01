<template>
  <div>
    <h1>Login page</h1>
    <button @click="handleLogin">Click to login</button>
  </div>
</template>

<script lang="ts">
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    // const router = useRouter();

    const handleLogin = () => {
      localStorage.setItem("is_logged", "1");
      const redirectURL = route.query.fallBackUrl
        ? route.query.fallBackUrl.toString()
        : "/";

      // router.push(redirectURL);
      window.location.href = redirectURL;
    };

    return { handleLogin };
  },
};
</script>

<style scoped></style>
