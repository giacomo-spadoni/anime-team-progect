<script>
import store from './data/store.js';
import AppMain from './components/AppMain.vue';
import AppCarousel from './components/AppCarousel.vue';
import AppCarouselMini from './components/AppCarouselMini.vue';

export default {
  components: {
    AppMain,
    AppCarousel,
    AppCarouselMini,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getImage(nomefile) {
      return new URL(`./assets/${nomefile}`, import.meta.url);
    },
  },
};
</script>

<template>
  <AppCarousel />
  <AppMain />
  <AppCarouselMini />
</template>

<style scoped></style>
