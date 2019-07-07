import {
  get
} from '@/services/http/axios'

class Category {
  // 获取所有标签
  async getCategories() {
    const res = await get('v1/category/categories')
    return res
  }
}

export default new Category()