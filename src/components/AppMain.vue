<script>
import store from '../data/store.js';
import CardGrid from './CardGrid.vue';
import PostList from './PostList.vue';
import MainBanner from './MainBanner.vue';

export default {
  components: {
    CardGrid,
    PostList,
    MainBanner,
  },
  data() {
    return {
      store,
    };
  },
  methods: {},
  mounted() {},
};
</script>
<template>
  <section class="container">
    <CardGrid />
    <PostList />
  </section>
  <MainBanner />
</template>
<style scoped>
.container {
  width: 1400px;
  margin: 0 auto;
}
</style>
