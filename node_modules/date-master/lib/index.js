/*
 * @Author: senze.fan
 * @Date: 2017-09-30 09:24:25
 * @Last Modified by: senze.fan
 * @Last Modified time: 2017-10-03 18:24:24
 * @Description: 时间操作
 */
import {
  isArr,
  addZero,
  callFn
} from './utils.js'
import isVaild from './vaild'

export default class DateMaster extends Date {
  constructor (props) {
    const _time = isVaild(props)
    super(isArr(_time) ? isVaild(_time[0]) : _time)
    this.time = _time
  }

  get DayTextZHCN () {
    return ['日', '一', '二', '三', '四', '五', '六']
  }

  get nativeDate () {
    return isArr(this.time) ? this.time[0] : this.time
  }

  /**
   * @desc 解析时间
   * @param  {String} key
   * @param  {Boolean, Number} notEnough
   */
  analysisTime (key, notEnough) {
    const fn = notEnough ? e => addZero(e[key]()) : e => e[key]()
    return isArr(this.time)
      ? this.time.map(fn)
      : fn(this.time)
  }

  /**
   * @desc 获取年份
   * @param  {Boolean, Number} notEnough
   */
  getFullYear () {
    return this.analysisTime('getFullYear')
  }

  /**
   * @desc 获取月份
   * @param  {Boolean, Number} notEnough
   */
  getMonth (notEnough) {
    return callFn((e) => notEnough ? addZero(++e) : ++e)(this.analysisTime('getMonth'))
  }

  /**
   * @desc 获取日
   * @param  {Boolean, Number} notEnough
   */
  getDate (notEnough) {
    return this.analysisTime('getDate', notEnough)
  }

  /**
   * @desc 获取天
   * @param  {Boolean, Number} notEnough
   */
  getDay (notEnough) {
    return this.analysisTime('getDay', notEnough)
  }

  /**
   * @desc 获取天 - 默认星期几
   * @param  {String} prefix - 前缀
   */
  getDayName (prefix) {
    return callFn((e) => `${prefix || '星期'}${this.DayTextZHCN[e]}`)(this.analysisTime('getDay'))
  }

  /**
   * @desc 获取小时
   * @param  {Boolean, Number} notEnough
   */
  getHours (notEnough) {
    return this.analysisTime('getHours', notEnough)
  }

  /**
   * @desc 获取分钟
   * @param  {Boolean, Number} notEnough
   */
  getMinutes (notEnough) {
    return this.analysisTime('getMinutes', notEnough)
  }

  /**
   * @desc 获取秒
   * @param  {Boolean, Number} notEnough
   */
  getSeconds (notEnough) {
    return this.analysisTime('getSeconds', notEnough)
  }

  /**
   * @desc 获取毫秒数
   */
  getTime () {
    return this.analysisTime('getTime')
  }

  /**
   * @desc 时间格式化
   * @param  {String} param
   */
  format (param) {
    const regArr = [
      { reg: /Y+/, key: 'getFullYear' },
      { reg: /M+/, key: 'getMonth' },
      { reg: /D+/, key: 'getDate' },
      { reg: /H+/, key: 'getHours' },
      { reg: /I+/, key: 'getMinutes' },
      { reg: /S+/, key: 'getSeconds' }
    ]
    return regArr.reduce((total, elem) => {
      const { reg, key } = elem
      if (reg.test(total)) {
        const notEnough = total.match(reg)[0].length - 1
        total = total.replace(reg, this[key](notEnough))
      }
      return total
    }, param)
  }

  /**
   * @desc 是否为同一天
   * @param  {String, Number, Date} time
   */
  isSameDay (time) {
    const firstTime = isArr(this.time) ? this.time[0] : this.time
    const secondTime = time ? new Date(time) : new Date()
    return firstTime.toDateString() === secondTime.toDateString()
  }

  /**
   * @desc 获取时间间隔
   * @param {Array, String, Number} param
   * @param {Array} units - 单位数组, 若长度小于4, 如[天, 小时, 分], 则返回 X天X小时X分, 即 秒会被忽略
   * @return {Array} units存在返回拼接好的字符串 , units不存在返回 [天, 小时, 分, 秒]
   */
  getTimeInterval (param, units) {
    param = isVaild(param)
    if (isArr(param)) {
      return param.map((e) => this.getTimeInterval(e, units))
    }
    let seconds = parseInt(Math.abs(this.nativeDate.getTime() - param.getTime()) / 1000, 10)
    let minutes = 0
    let hours = 0
    let days = 0
    if (seconds > 60) {
      minutes = parseInt(seconds / 60, 10)
      seconds = parseInt(seconds % 60, 10)
      if (minutes > 60) {
        hours = parseInt(minutes / 60, 10)
        minutes = parseInt(minutes % 60, 10)
        if (hours > 24) {
          days = parseInt(hours / 24, 10)
          hours = parseInt(hours % 24, 10)
        }
      }
    }
    return isArr(units)
      ? [days, hours, minutes, seconds].reduce((total, elem, index) => {
        units[index] && (total += elem + units[index])
        return total
      }, '')
      : [days, hours, minutes, seconds]
  }
}
