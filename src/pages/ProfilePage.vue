<template>
  <div class="col-3">
    <!-- <img :src="blogPost.creator.picture" :alt="blogPost.creator.name" /> -->
  </div>
</template>

<script>
import Pop from "../utils/Pop";
import { profilesService } from "../services/ProfilesService";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    onMounted(() => {
      getProfileById();
    });
    async function getProfileById() {
      try {
        const profileId = route.params.profileId;
        await profilesService.getProfileById(profileId);
      } catch (error) {
        Pop.error(error);
      }
    }
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
