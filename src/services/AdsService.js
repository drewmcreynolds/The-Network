import { AppState } from '../AppState.js'
import { Ad } from '../models/Ads.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AdsService {
  async getAds() {
    try {
      const res = await api.get('/api/ads')
      AppState.ads = res.data.map(a => new Ad(a))
    } catch (error) {
      logger.error(error, 'error')
    }
  }
}
export const adsService = new AdsService()
