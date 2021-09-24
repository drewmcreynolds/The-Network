<template>
  <div class="col-md-4 mb-3">
    <div class="card p-3" style="width: 30rem; height: 36rem;">
      <img :src="post.imgUrl" class="card-img-top image-fluid" alt="..." style="height: 400px;">
      <div class="card-body" style="">
        <h4 class="card-text">
          {{ post.body }}
        </h4>
        <h6>
          {{ post.creator.name }}
        </h6>
      </div>
      <div class="card d-flex">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn-primary">
          Profile Page
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
