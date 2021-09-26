import { AppState } from '../AppState.js'
import { Post } from '../models/Post.js'
import { logger } from '../utils/Logger.js'
import { convertToQuery } from '../utils/Query.js'
import { api } from './AxiosService'
class PostsService {
  async getPosts(query = {}) {
    AppState.posts = []
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log('posts res', res)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async searchByPosts(query) {
    const res = await api.get(`api/posts/?query=${query}`)
    logger.log('search by posts', res)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async createPost(newPost) {
    const res = await api.post('api/posts', newPost)
    AppState.posts.unshift(new Post(res.data))
    logger.log('create res', res)
  }

  async likePost(id) {
    const res = await api.post(`api/posts/${id}/like`)
    logger.log('like the post', res.data.like)
    const l = AppState.posts.findIndex(p => p.id === id)
    AppState.posts.splice(l, 1, new Post(res.data))
    AppState.posts = [...AppState.posts]
  }

  async deletePost(postId) {
    const res = await api.delete('api/posts/' + postId)
    logger.log('delete res', res)
    AppState.posts = AppState.posts.filter(p => p.id !== postId)
  }
}

export const postsService = new PostsService()
