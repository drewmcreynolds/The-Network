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
          <h4 class="text-danger">
            edit your name
          </h4>
          <input type="text" v-model="account.name" placeholder="Name"><br />
          <h4 class="text-danger">
            edit your class
          </h4>
          <input type="text" v-model="account.class" placeholder="Class"><br />
          <h4 class="text-danger">
            edit your picture
          </h4>
          <input type="text" v-model="account.picture" placeholder="Picture"><br />
          <h4 class="text-danger">
            edit your cover picture
          </h4>
          <input type="text" v-model="account.coverImg"><br />
          <h4 class="text-danger">
            edit your linkedin
          </h4>
          <input type="text" v-model="account.linkedin" placeholder="Linkedin"><br />
          <h4 class="text-danger">
            edit your github
          </h4>
          <input type="text" v-model="account.github" placeholder="Github"><br />
          <h6 class="text-danger">
            Did you graduated?
          </h6>
          <input type="checkbox" v-model="account.graduated" placeholder="Grad"><br />
          <h4 class="text-danger">
            About you
          </h4>
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
.cover-img {
  background-size: cover;
  background-position: center center;
  height: 35vh;
}
</style>
