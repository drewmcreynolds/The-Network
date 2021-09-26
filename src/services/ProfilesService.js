import { AppState } from '../AppState'
import { Post } from '../models/Post.js'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProfilesService {
  async getProfileById(id) {
    const res = await api.get('api/profiles/' + id)
    logger.log('profile res', res)
    AppState.profile = res.data
  }

  async getNewerPosts(id) {
    AppState.posts = []
    AppState.pData = {}
    AppState.currentPage++
    const res = await api.get(`api/posts/?creatorId=${id}?page=${AppState.currentPage}`)
    AppState.pData = res.data
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  async getOlderPosts(id) {
    AppState.posts = []
    AppState.pData = {}
    AppState.currentPage--
    const res = await api.get(`api/posts/?creatorId=${id}?page=${AppState.currentPage}`)
    AppState.pData = res.data
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
}
export const profilesService = new ProfilesService()
