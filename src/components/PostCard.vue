<template>
  <div class="container-fluid">
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
          <div style="right: 2rem; top: 2rem" v-if="account.id == post.creatorId">
            <i class="mdi mdi-trash text-warning f-25 selectable" @click="deletePost()">
              Delete
            </i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      // posts: computed(() => AppState.posts)
      async deletePost() {
        try {
          const yes = await Pop.confirm('do you really want to delete this?')
          if (!yes) { return }
          await postsService.deletePost(props.post.id)
          Pop.toast('Its Deleted', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async likePost() {
        try {
          await postsService.likePost(props.post.id)
          Pop.toast('You liked it!', 'success')
        } catch (error) {
          Pop.toas(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
