<template>
  <div>HOME PAGE</div>
</template>

<script>
import Pop from "../utils/Pop";
import { blogPostsService } from "../services/BlogPostsService";
import { onMounted } from "vue";

export default {
  setup() {
    async function getBlogPosts() {
      try {
        await blogPostsService.getBlogPosts();
      } catch (error) {
        Pop.error(error);
      }
    }

    onMounted(() => {
      getBlogPosts();
    });
    return {};
  },
};
</script>

<style scoped lang="scss"></style>
