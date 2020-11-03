/*
 * @Author: senze.fan
 * @Date: 2017-09-30 11:02:20
 * @Last Modified by: senze.fan
 * @Last Modified time: 2017-10-02 11:35:16
 * @Description: 时间参数验证
 */
import {
  isStr,
  isArr
} from './utils.js'

/**
 * @desc 时间验证
 * @param  {Any} time
 */
export default function isVaild (time) {
  // null, undefined, 0, false, [] 非法数值默认取现在的时间
  if (!time) return new Date()
  if (typeof time === 'object') {
    // 入参为对象
    if (isArr(time)) {
      // 入参为数组, 数组长度0, 返回现在时间, 不然返回新数组
      return time.length ? time.map(e => isVaild(e)) : new Date()
    } else if (time.constructor !== Date) {
      throw new Error('Invaild Date!')
    }
  } else if (isStr(time)) {
    // 入参为字符串
    time = time.replace(/-/g, '/')
  }
  return new Date(time)
}
