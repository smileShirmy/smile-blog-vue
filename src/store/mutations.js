import * as types from './mutation-types'

const mutations = {
  [types.SET_THEME](state, theme) {
    state.theme = theme
  },
  [types.SET_SHOW_SEARCH](state, isShowSearch) {
    state.isShowSearch = isShowSearch
  }
}

export default mutations