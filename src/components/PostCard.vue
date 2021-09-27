<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card p-3 m-1 elevation-3" style="height: 624px">
        <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="btn btn">
          <img :src="post.imgUrl" class="card-img-top image-fluid rounded-top" style="max-height: 300px; max-width: 400px;" alt="...">
          <div class="card-body">
            <h4 class="card-text">
              {{ post.body }}
            </h4>
            <h6 class="card-text">
              <small class="text-muted">
                Posted: {{ new Date(post.updatedAt).toDateString() }}
              </small>
            </h6>
            <div class="footer text-end">
              <img :src="post.creator.picture" style="height: 40px; width: 40px;" class="align-items-end">
              <h6>
                {{ post.creator.name }}
              </h6>
            </div>
          </div>
          <div v-if="account.id == post.creatorId">
            <i class="mdi mdi-trash-can mdi-48px text-warning f-30 selectable" @click="deletePost()">
            </i>
          </div>
        </router-link>
        <span>
          <i class="mdi mdi-thumb-up selectable" @click="likePost()"> Likes {{ post.likes.length }}</i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { Post } from '../models/Post.js'

export default {
  props: {
    post: {
      type: Post,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
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
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
