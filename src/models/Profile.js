export class Profile {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.coverImg = data.coverImg
    this.img = data.picture
    this.likeIds = data.likeIds
    this.resume = data.resume
    this.email = data.email
    this.bio = data.bio
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
    this.graduate = data.graduated
  }
}
