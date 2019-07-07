import {
  get
} from '@/services/http/axios'

class Author {
  // 获取所有作者
  async getAuthors() {
    const res = await get('v1/author/authors')
    return res
  }
}

export default new Author()