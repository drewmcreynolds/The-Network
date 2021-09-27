<template>
  <div class="home d-flex flex-column align-items-center justify-content-center">
    <div class="row mt-5">
      <div class="col ms-3 mt-5 p-3">
        <Ad v-for="a in ad" :key="a.id" :ad="a" />
      </div>
      <div class="row mt-3">
        <div class="col-10 ms-3 mt-5 p-2">
          <PostCard v-for="p in posts" :key="p.id" :post="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
import { postsService } from '../services/PostsService.js'
import { adsService } from '../services/AdsService.js'

export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getPosts()
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      ad: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped lang="scss">
// .sidebar{
//   position: fixed;
//   height: 100vh;
// }

</style>
