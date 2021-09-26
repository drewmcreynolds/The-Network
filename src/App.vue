<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <Sidebar />
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
        </div>
        <div class="col-md-9 viewport">
          <router-view />
        </div>
      </div>
    </div>
  </main>
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
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
.sidebar{
  position: fixed;
  height: 100vh;
}
// .viewport{
//   height: 100vh;
//   overflow-y: auto ;
// }

</style>
