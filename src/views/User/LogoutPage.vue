<template>
  <div></div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeRouteEnter(_to: unknown, from: { fullPath: string }, _next: unknown) {
    localStorage.removeItem("is_logged");
    window.location.href = from.fullPath;
    // ...
  },
  // setup() {
  //   localStorage.removeItem("is_logged");
  //   console.log("Remoed");

  //   const route = useRoute();
  //   const router = useRouter();

  //   console.log("route.query :>> ", route.query);
  //   const redirectURL = route.query.fallBackUrl
  //     ? route.query.fallBackUrl.toString()
  //     : "/";

  //   // window.location.href = redirectURL;

  //   console.log("redirectURL :>> ", redirectURL);
  //   router.push(redirectURL);

  //   return {};
  // },
};
</script>

<style scoped></style>
