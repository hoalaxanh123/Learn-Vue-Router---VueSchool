<template>
  <h2 v-if="title">{{ title }}</h2>
  <div class="box-detail smooth-anim">
    <img :src="require(`@/assets/${image}`)" :alt="title" />
    <h3>{{ description }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.box-detail {
  display: flex;
  padding: 2rem;
  margin: 2rem;
  flex-basis: content;

  margin: 0 auto;
}
.box-detail > h3 {
  padding-left: 2rem;
  text-align: justify;
  margin: 0;
  font-weight: normal;
}
.box-detail > img {
  border-radius: 30px 0 30px 0;
  box-shadow: 0px 0px 5px 5px #10684096;
}
</style>
