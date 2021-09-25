<template>
  <header>
    <div class="row">
      <Navbar />
    </div>
  </header>
  <main>
    <div class="row">
      <div class="col-md-3">
        <Sidebar />
      </div>
    </div>
    <div class="col-md-9">
      <router-view />
    </div>
  </main>
  <footer>
  </footer>
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

</style>
