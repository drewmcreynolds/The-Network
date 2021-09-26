<template>
  <div class="container-fluid">
    <div class="row" v-if="posts.length > 0">
      <div class="col-md-6">
        <h1>
          <PostCard v-for="p in posts" :key="p.id" :post="p" />
        </h1>
      </div>
    </div>
    <div class="row" v-else>
      <h3>Loading............</h3>
    </div>
    <div class="col-3">
      <Ad v-for="a in ad" :key="a.id" :ad="a" />
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { adsService } from '../services/AdsService.js'

export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsService.getPosts({ creatorId: route.params.id })
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      ad: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
