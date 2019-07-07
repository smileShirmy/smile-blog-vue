import {
  get
} from '@/services/http/axios'

class Article {
  // 获取所有文章
  async getArticles(params = {}) {
    let query = {
      categoryId: params.categoryId ? params.categoryId : 0,
      authorId: params.authorId ? params.authorId : 0,
      tagId: params.tagId ? params.tagId : 0
    }
    if (params.search) {
      query.search = params.search
    }
    const res = await get('v1/article/blog/articles', query)
    return res
  }

  async getStarArticles() {
    const res = await get('v1/article/star/articles')
    return res
  }
}

export default new Article()