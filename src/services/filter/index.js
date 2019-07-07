import Utils from '../utils/util'

export default {
  filterTime(date, formats) {
    return Utils.timestampToTime(date, formats)
  },
}