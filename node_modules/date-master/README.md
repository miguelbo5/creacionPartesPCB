# Date-Master
`Date Utils`

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Getting Started  

### Installation  
```shell
yarn add date-master
  or
npm i date-master -S
```  

### Methods  
|key              |params       |description    |
|-----------------|-------------|---------------|
|getFullYear()    |             |获取完成年份     |
|getMonth()       |Boolean      |获取月份, 参数表示值小与10时, 是否补0, 如 '01', 默认 false   |
|getDate()        |Boolean      |获取日, 参数表示值小与10时, 是否补0, 如 '01', 默认 false     |
|getDay()         |Boolean      |获取天, 参数表示值小与10时, 是否补0, 如 '01', 默认 false     |
|getHours()       |Boolean      |获取小时, 参数表示值小与10时, 是否补0, 如 '01', 默认 false   |
|getMinutes()     |Boolean      |获取分钟, 参数表示值小与10时, 是否补0, 如 '01', 默认 false   |
|getSeconds()     |Boolean      |获取秒, 参数表示值小与10时, 是否补0, 如 '01', 默认 false     |
|getDayName()     |String       |获取中文${params}几, 默认 星期     |
|isSameDay()      |Vaild Date Param |是否为同一天, 参数为需要比较的时间，用法参考 Example     |
|format()         |String       |格式化时间, 具体用法参考 Example     |
|getTimeInterval()|Vaild Date Param, Array        |获取时间间隔, 第一个参数表示需要比较的时间, 第二个参数表示拼接字符串需要的单位, 具体用法参考 Example     |
|nativeDate       |             |实例化传入的参数或传入数组的第一个值 的原生Date对象，可调用Date上任意方法。 if u use this package without babel, i think u may not need this getter     |



### Example  

```javascript
import DateMaster from 'date-master'

const seconds1 = 1506807200000
const seconds2 = 1507019639139

/** getFullYear */
new DateMaster(seconds1).getFullYear() // 2017

new DateMaster([seconds1, seconds2]).getFullYear() // [2017, 2017]

/** getMonth */
new DateMaster(seconds1).getMonth() // 10

new DateMaster([seconds1, seconds2]).getMonth() // [10, 10]

/** getDate */
new DateMaster(seconds1).getDate() // 1

new DateMaster(seconds1).getDate(true) // '01'

new DateMaster([seconds1, seconds2]).getDate(true) // ['01', '03']

/** getDay */
new DateMaster(seconds1).getDay() // 0

/** getHours */
new DateMaster(seconds1).getHours() // 5
new DateMaster(seconds1).getHours(true) // 05

/** getMinutes */
new DateMaster(seconds1).getMinutes() // 33

/** getSeconds */
new DateMaster(seconds1).getSeconds() // 20

/** getDayName */
new DateMaster(seconds1).getDayName() // '星期日'
new DateMaster(seconds1).getDayName('周') // '周日'
new DateMaster([seconds1, seconds2]).getDayName('周') // ['周日', '周二']

/** isSameDay */
new DateMaster(seconds1).isSameDay(new Date()) // false
new DateMaster(seconds1).isSameDay(new Date(seconds1)) // true

/** format */
new DateMaster(seconds1).format('Y-MM-DD') // '2017-10-01'
new DateMaster(seconds1).format('Y.M.D') // '2017.10.1'
new DateMaster(seconds1).format('Y-M-D HH:II:SS') // '2017-10-1 05:33:20'

/** getTimeInterval */
new DateMaster(seconds1).getTimeInterval('2017-10-20') // [18, 18, 26, 40]
new DateMaster(seconds1).getTimeInterval('2017-10-20', ['天', '小时', '分钟', '秒']) // '18天18小时26分钟40秒')
new DateMaster(seconds1).getTimeInterval(['2017-10-20', '2017-10-22'], ['天', '小时', '分钟', '秒']) // ['18天18小时26分钟40秒', '20天18小时26分钟40秒']

/** Native Date Object */
new DateMaster(seconds1).nativeDate.getMonth() // 9

new DateMaster(seconds1).nativeDate.getDay() // 0

new DateMaster(seconds1).nativeDate.getHours() // 5

new DateMaster(seconds1).nativeDate.toDateString() 'Sun Oct 01 2017'

```
