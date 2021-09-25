<template>
  <div class="card p-3 m-3">
    <img :src="post.imgUrl" class="card-img-top image-fluid rounded-top" alt="..." style="height: 25vh; width:35vh">
    <div class="card-body">
      <h4 class="card-text">
        {{ post.body }}
      </h4>
      <div class="footer text-end">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn">
          <img :src="post.creator.picture" style="height: 40px; width: 40px;">
          <h6>
            {{ post.creator.name }}
          </h6>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
