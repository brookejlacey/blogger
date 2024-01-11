<template>
  <div class="card">
    <img :src="blogPost.imgUrl" class="img-fluid img" :alt="blogPost.title" />
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <p class="card-title">{{ blogPost.title }}</p>
        <router-link
          :to="{ name: 'Profile', params: { profileId: blogPost.creatorId } }"
        >
          <img :src="blogPost.creator.picture" />
        </router-link>
        <p>{{ blogPost.creator.name }}</p>
        <p>{{ blogPost.body.substring(0, 50) + "..." }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { computed, ref, onMounted } from "vue";
import { BlogPost } from "../models/BlogPost";
import { RouterLink } from "vue-router";

export default {
  props: {
    blogPost: { type: BlogPost, required: true },
  },
  setup() {
    return {};
  },
  components: { RouterLink },
};
</script>

<style lang="scss" scoped>
.img {
  height: 30vh;
  object-fit: cover;
}
</style>
