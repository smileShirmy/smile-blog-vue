/**
 * 工具函数
 */
const Utils = {}

/**
 * 邮箱验证
 * @param {String} email 邮箱名
 */
Utils.validateEmail = (email) => {
  if (!email) {
    return false
  }
  return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(email)
}

/**
 * url验证
 * @param {String} url url
 */
Utils.validateUrl = (url) => {
  if (!url) {
    return false
  }
  // eslint-disable-next-line no-useless-escape
  return /^((https|http):\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(url)
}

export default Utils