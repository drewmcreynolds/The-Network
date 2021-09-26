<template>
  <div class="container">
    <div class="header" v-if="account">
      <div class="row cover-img" :style="{ backgroundImage: `url(${account.coverImg})`}">
        <h1 class="text-light">
          {{ account.name }}
        </h1>
      </div>
      <div class="row">
        <form @submit.prevent="editAccount()">
          <p>edit your name</p>
          <input type="text" v-model="account.name" placeholder="Name">
          <p>edit your class</p>
          <input type="text" v-model="account.class" placeholder="Class">
          <p>edit your picture</p>
          <input type="text" v-model="account.picture" placeholder="Picture">
          <p>edit your cover picture</p>
          <input type="text" v-model="account.coverImg">
          <p>edit your linkedin</p>
          <input type="text" v-model="account.linkedin" placeholder="Linkedin">
          <p>edit your github</p>
          <input type="text" v-model="account.github" placeholder="Github">
          <p>Did you graduated?</p>
          <input type="checkbox" v-model="account.graduated" placeholder="Grad">
          <p>About you</p>
          <textarea v-model="account.bio"
                    name="body"
                    id="body"
                    class="form-control"
                    rows="7"
          ></textarea>
          <button class="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    <div v-else>
      <h3>Loading..........</h3>
    </div>
    <div class="row">
      <div class="col">
        <Ad v-for="a in ad" :key="a.id" :ad="a" />
      </div>
    </div>
  </div>
  <!-- <div class="row">
      <div class="col-md-9">
        <div class="about text-center">
          <h1>Welcome {{ account.name }}</h1>
          <img class="rounded" :src="account.picture" alt="" />
          <p>{{ account.email }}</p>
        </div>
        <div class="col-md-3">

        </div>
      </div>
    </div> -->
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { adsService } from '../services/AdsService.js'
import Pop from '../utils/Pop.js'
import { accountService } from '../services/AccountService.js'

export default {
  name: 'Account',
  setup() {
    const account = computed(() => AppState.account)
    onMounted(async() => {
      try {
        await adsService.getAds()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      account,
      async editAccount() {
        try {
          await accountService.editAccount(account.value)
        } catch (error) {
          Pop.toast('You edited your account')
        }
      },
      ad: computed(() => AppState.ads)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
