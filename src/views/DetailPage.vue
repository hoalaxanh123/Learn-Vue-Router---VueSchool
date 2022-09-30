<template>
  <div v-if="isLoading" class="smooth-anim">
    <loading-icon />
    <h2>Loading...</h2>
  </div>
  <div v-else>
    <div class="location-container">
      <h2>{{ location.name }}</h2>
      <div class="location-detail smooth-anim">
        <show-info
          :image="location.image"
          :description="location.description"
        />
      </div>
    </div>
    <div class="top-experiences smooth-anim">
      <h2>Top experiences in {{ location.name }}</h2>
      <div class="flex">
        <router-link
          :to="{
            name: 'Experience',
            params: { experienceSlug: experience.slug },
          }"
          v-for="experience in location.experiences"
          :key="experience.slug"
        >
          <div class="experience-body">
            <h3 class="centered text">{{ experience.name }}</h3>
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div class="experience-info">
      <router-view :key="$route.path" />
    </div>
    <button @click="handleBack">{{ "<< Back" }}</button>
  </div>
</template>

<script lang="ts">
import store from "@/data/store";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import LoadingIcon from "../components/LoadingIcon.vue";
import ShowInfo from "@/components/ShowInfo.vue";

export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  setup(props: { slug: string }) {
    const router = useRouter();
    const isLoading = ref(true);
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
    const location = computed(() => {
      return store.destinations.find(
        (location) => location.slug === props.slug
      );
    });
    const handleBack = () => {
      router.go(-1);
    };
    return { isLoading, location, handleBack };
  },
  components: { LoadingIcon, ShowInfo },
};
</script>

<style scoped>
.experience-body {
  position: relative;
  text-align: center;
}
.experience-body > img {
  max-width: 90%;
  border-radius: 10px;
  /* border: 1px solid #42b98396; */
  transition: all 0.2s linear;
}
.text {
  transition: all 0.2s linear;
}
.experience-body:hover > img {
  box-shadow: 0px 0px 5px 5px #02160d96;
  transform: translateY(-10px);
}
.experience-body:hover > .text {
  box-shadow: 0px 0px 5px 5px #02160d96;
  transform: translate(-50%, -110%);
}

.experience-info {
  margin: 50px auto;
  width: 80%;
}
.centered {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 5px 5px #01351d2d;
  background: #0d59372d;
  color: white;
  z-index: 999;
  padding: 0 20px;
}
</style>
