<template>
  <div class="home">
    <h1>All Destinations</h1>
    <!-- List of nav -->
    <div class="slide-show smooth-anim">
      <router-link
        :to="{
          name: 'DetailPage',
          params: { slug: location.slug },
        }"
        v-for="location in store.destinations"
        :key="location.name"
      >
        <figure>
          <figcaption>
            <h3>{{ location.name }}</h3>
          </figcaption>
          <img
            :src="require(`@/assets/${location.image}`)"
            :alt="location.image"
          />
        </figure>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import store from "@/data/store";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {},
  setup() {
    return { store };
  },
});
</script>

<style scoped>
.slide-show {
  display: flex;
  justify-content: space-between;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  max-width: fit-content;
  margin: auto;
}

img {
  max-width: 300px;
  border-radius: 10px;
  border: 2px solid #42b98396;
}
figure,
img {
  transition: all linear 0.6s;
}
figure:hover {
  transform: translateY(-5%);
  transition: all linear 0.15s;
}
figure:hover > img {
  box-shadow: 0px 0px 10px 10px #42b98396;
  transition: all linear 0.15s;
}
figure:hover > figcaption {
  transition: all linear 0.15s;
  color: #42b98396;
}
a {
  text-decoration: none;
}
@media (max-width: 800px) {
  .slide-show {
    flex-direction: column;
  }
}
</style>
