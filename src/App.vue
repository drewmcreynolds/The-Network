<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid bggrad">
    <div class="row">
      <div class="col-md-2">
        <Sidebar />
      </div>
      <div class="col-md-8">
        <router-view />
      </div>
    </div>
  </main>
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
  height: 100vh;
}

</style>
