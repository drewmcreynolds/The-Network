<template>
  <div class="col-md-4 mb-3">
    <div class="card p-3" style="height: 450px;">
      <img :src="post.imgUrl" class="card-img-top" alt="..." style="height: 300px; width: 400px;">
      <div class="header text-end">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn">
          <img :src="post.creator.picture" style="height: 40px; width: 40px;">
        </router-link>
      </div>
      <div class="card-body">
        <h4 class="card-text">
          {{ post.body }}
        </h4>
        <h6>
          {{ post.creator.name }}
        </h6>
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
