<template>
  <div>
    <form @submit.prevent="searchByPosts()" class="bg-light rounded shadow-2">
      <div class="form-group d-flex align-items-center">
        <label for="search" class="sr-only"></label>
        <input v-model="query"
               type="text"
               name="search"
               class="form-control bg-light"
               placeholder="search"
               required
        >
        <button class="btn btn-success selectable">
          Search
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'

export default {
  setup() {
    const query = ref('')
    return {
      query,
      async searchByPosts() {
        try {
          await postsService.searchByPosts(query.value)
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
