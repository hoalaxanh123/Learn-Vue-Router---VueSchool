<template>
  <div class="box-detail smooth-anim">
    <img
      :src="require(`@/assets/${experience.image}`)"
      :alt="experience.title"
    />
    <h3>{{ experience.description }}</h3>
  </div>
</template>

<script lang="ts">
import store from "@/data/store";
import { computed } from "vue";

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  setup(props: { slug: string; experienceSlug: string }) {
    console.log("props :>> ", props);
    const destination = computed(() => {
      return (
        store.destinations.find((x) => x.slug === props.slug) || {
          experiences: [],
        }
      );
    });

    const experience = computed(() => {
      return destination.value.experiences.find(
        (x) => x.slug === props.experienceSlug
      );
    });
    return { experience };
  },
};
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
