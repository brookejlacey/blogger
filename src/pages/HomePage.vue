<template>
  <div>CENTRAL PERK</div>
  <!-- <div class="card" style="width: 18rem">
    <img class="card-img-top" src="" alt="Card image cap" />
    <div class="card-body">
      <p class="card-text">Central Perk crap</p>
    </div>
  </div> -->
  <div class="container-fluid">
    <section class="row">
      <div v-for="blogPost in blogPosts" :key="blogPost.id" class="col-6">
        <BlogPost :blogPost="blogPost" />
      </div>
    </section>
  </div>
</template>

<script>
import Pop from "../utils/Pop";
import { blogPostsService } from "../services/BlogPostsService";
import { computed, onMounted } from "vue";
import { AppState } from "../AppState";
import BlogPost from "../components/BlogPost.vue";

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
    return {
      blogPosts: computed(() => AppState.blogPosts),
    };
  },
  components: { BlogPost },
};
</script>

<style scoped lang="scss"></style>
