<template>
  <div class="col-md-4 mb-5">
    <div class="card p-3" style="width: 24rem; height: 36rem;">
      <img :src="post.imgUrl" class="card-img-top" alt="...">
      <div class="card-body" style="">
        <p class="card-text">
          {{ post.body }}
        </p>
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
