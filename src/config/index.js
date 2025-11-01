export default {
  baseUrl: 'https://mylaw.fun',
  paths: {
    uploads: '/wp-content/uploads/',
    images: '/wp-content/uploads/images/',
    documents: '/wp-content/uploads/documents/'
  },
  getUploadUrl(path) {
    return this.baseUrl + this.paths.uploads + path.replace(/^\//, '')
  }
}