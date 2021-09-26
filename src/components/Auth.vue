<template>
  <div class="py-3">
    <div v-if="account.id">
      <div class="text-start">
        <router-link :to="{name: 'Profile', params: {id: account.id}}" class="btn selectable">
          <img :src="account.picture" alt="" class="rounded my-2" height="120">
        </router-link>
      </div>
      <br />
      <button class="btn selectable text-danger" @click="logout" title="logout">
        <span class="selectable">LOGOUT</span>
      </button>
    </div>
    <div v-else>
      <button class="btn selectable text-success" @click="login">
        <span>LOGIN</span>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { AuthService } from '../services/AuthService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    return {
      profile: computed(() => AppState.profiles),
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithRedirect()
      },
      async logout() {
        const yes = await Pop.confirm('do you realy want to Logout?', '', 'warning')
        if (!yes) { return }
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
