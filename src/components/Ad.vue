<template>
  <div>
    <img :src="ad.tall" class="elevation-4 rounded m-2">
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
export default {
  props: {
    ad: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      ads: computed(() => AppState.ads)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
