<template>
  <div class="card">
    <img :src="blogPost.imgUrl" class="img-fluid img" :alt="blogPost.title" />
    <div class="card-body d-flex justify-content-between align-items-center">
      <div>
        <p class="card-title">{{ blogPost.title }}</p>
        <p>{{ blogPost.creator.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { computed, ref, onMounted } from "vue";
import { BlogPost } from "../models/BlogPost";

export default {
  props: {
    blogPost: { type: BlogPost, required: true }, //why required ask mick
  },
  setup() {
    function snippet(blogPost, maxLength) {
      if (blogPost.body.length > maxLength) {
        return blogPost.body.substring(0, maxLength) + "...";
      }
    }

    return {
        snippet()
    };
  },
};
</script>

<style lang="scss" scoped>
.img {
  height: 30vh;
  object-fit: cover;
}
</style>
