import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  ads: [],
  profiles: [],
  likes: [],
  pData: {},
  currentPage: 1,
  newer: '',
  older: ''
})
