<template>
  <header class="d-flex mb-4">
    <div class="row">
      <div class="col-md-4">
        <button @click="getNewerPosts()" class="btn btn-success selectable">
          Newer
        </button>
      </div>
      <div class="col-md-4">
        <button :disabled="currentPage === 1" @click="getOlderPosts()" class="btn btn-success selectable">
          Older
        </button>
      </div>
      <div class="col-md-4">
        <button class="btn btn-success" type="button" data-bs-toggle="modal" data-bs-target="#post-form">
          Create Post
        </button>
      </div>
    </div>
  </header>
  <div class="container-fluid">
    <Profile />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'

export default {
  setup() {
    const route = useRoute()
    return {
      currentPage: computed(() => AppState.currentPage),
      async getOlderPosts() {
        try {
          await profilesService.getOlderPosts(route.params.id)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async getNewerPosts() {
        try {
          await profilesService.getNewerPosts(route.params.id)
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
