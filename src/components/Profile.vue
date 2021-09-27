<template>
  <div class="container-fluid">
    <div v-if="profile">
      <div class="row d-flex justify-content-center">
        <div class="card mt-3 p-0">
          <div class="card-header cover-img" :style="{ backgroundImage: `url(${account.coverImg})`}">
            <img :src="account.picture" alt="" class="rounded my-2" height="200">
          </div>
          <div class="card-body text-center">
            <a :href="account.github" class="text-dark p-3 ms-3">
              <i class="mdi mdi-github mdi-48px selectable text-dark">
              </i>
              Github</a>
            <a :href="account.linkedin" class="p-3 ms-3">
              <i class="mdi mdi-linkedin mdi-48px selectable">
              </i>
              Linkedin</a>

            <h3 class="text-black">
              <small> Class:  {{ profile.class }}</small>
            </h3>
            <h3 class="text-black">
              <small> Graduated:  {{ profile.graduated }}</small>
            </h3>
            <h3>
              <b>
                {{ profile.name }}
              </b>
            </h3>
            <h6>
              {{ profile.bio }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 class="text-success">
        LOADING...........
      </h1>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row" v-if="posts.length > 0">
      <div class="col-md-9">
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

  <Modal>
    <template #modal-title>
      <h4>Post Form</h4>
    </template>
    <template #modal-body>
      <PostForm />
    </template>
  </Modal>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { AppState } from '../AppState.js'
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { adsService } from '../services/AdsService.js'
import { accountService } from '../services/AccountService.js'

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
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      posts: computed(() => AppState.posts),
      ad: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

.cover-img {
  background-size: cover;
  background-position: center center;
  height: 35vh;
}
.acc-img {
  height: 100px;
  width: 100px;
  background-size: cover;
}

</style>
