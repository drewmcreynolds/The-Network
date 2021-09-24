export class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.creator = data.creator || {}
    this.createdAt = data.createdAt
    this.likeIds = data.likeIds
    this.likes = data.likes
    this.body = data.body
    this.imgUrl = data.imgUrl
  }
}
