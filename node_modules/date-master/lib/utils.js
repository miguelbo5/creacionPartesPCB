/*
 * @Author: senze.fan
 * @Date: 2017-09-30 13:08:32
 * @Last Modified by: senze.fan
 * @Last Modified time: 2017-10-01 19:30:16
 * @Description: 实用方法
 */
export const isStr = param => typeof param === 'string'

export const isArr = param => Array.isArray(param)

export const addZero = time => parseInt(time, 10) < 10 ? `0${time}` : time

export const callFn = fn => param => isArr(param) ? param.map(e => fn(e)) : fn(param)
