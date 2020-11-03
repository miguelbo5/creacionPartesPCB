import DateMaster from '../lib'

const seconds1 = 1506807200000
const seconds2 = 1507019639139
const instance = time => new DateMaster(time)

describe('Test Date', () => {
  test('Year should to be 2017', () => {
    expect(instance(seconds1).getFullYear()).toBe(2017)
  })

  test('Year should to equal [2017, 2017]', () => {
    expect(instance([seconds1, seconds2]).getFullYear()).toEqual([2017, 2017])
  })

  test('Month should to be 10', () => {
    expect(instance(seconds1).getMonth()).toBe(10)
  })

  test('Month should to equal 10', () => {
    expect(instance([seconds1, seconds2]).getMonth()).toEqual([10, 10])
  })

  test('Date should to be 1', () => {
    expect(instance(seconds1).getDate()).toBe(1)
  })

  test('Date should to be 01', () => {
    expect(instance(seconds1).getDate(true)).toBe('01')
  })

  test('Date should to equal [01, 01]', () => {
    expect(instance([seconds1, seconds2]).getDate(true)).toEqual(['01', '03'])
  })

  test('Day should to be 0', () => {
    expect(instance(seconds1).getDay()).toBe(0)
  })

  test('Hours should to be 5', () => {
    expect(instance(seconds1).getHours()).toBe(5)
  })

  test('Hours should to be 05', () => {
    expect(instance(seconds1).getHours(true)).toBe('05')
  })

  test('Minutes should to be 33', () => {
    expect(instance(seconds1).getMinutes()).toBe(33)
  })

  test('seconds1 should to be 20', () => {
    expect(instance(seconds1).getSeconds()).toBe(20)
  })

  test('DayName should to be 星期日', () => {
    expect(instance(seconds1).getDayName()).toBe('星期日')
  })

  test('DayName should to be 周日', () => {
    expect(instance(seconds1).getDayName('周')).toBe('周日')
  })

  test('DayName should to be [周日, 周二]', () => {
    expect(instance([seconds1, seconds2]).getDayName('周')).toEqual(['周日', '周二'])
  })

  test('isSameDay should to be false', () => {
    expect(instance(seconds1).isSameDay(new Date())).toBe(false)
  })

  test('isSameDay should to be true', () => {
    expect(instance(seconds1).isSameDay(new Date(seconds1))).toBe(true)
  })

  test('format should to be 2017-10-01', () => {
    expect(instance(seconds1).format('Y-MM-DD')).toBe('2017-10-01')
  })

  test('format should to be 2017.10.1', () => {
    expect(instance(seconds1).format('Y.M.D')).toBe('2017.10.1')
  })

  test('format should to be 2017-10-1 05:33:20', () => {
    expect(instance(seconds1).format('Y-M-D HH:II:SS')).toBe('2017-10-1 05:33:20')
  })

  test('TimeInterval should to equal [18, 18, 26, 40]', () => {
    expect(instance(seconds1).getTimeInterval('2017-10-20')).toEqual([18, 18, 26, 40])
  })

  test('TimeInterval should to be 18天18小时26分钟40秒', () => {
    expect(instance(seconds1).getTimeInterval('2017-10-20', ['天', '小时', '分钟', '秒'])).toBe('18天18小时26分钟40秒')
  })

  test('TimeInterval should to equal [18天18小时26分钟40秒, 20天18小时26分钟40秒]', () => {
    expect(instance(seconds1).getTimeInterval(['2017-10-20', '2017-10-22'], ['天', '小时', '分钟', '秒'])).toEqual(['18天18小时26分钟40秒', '20天18小时26分钟40秒'])
  })

  /** Native Date Object */
  test('nativeDate.getMonth should to be 9', () => {
    expect(instance(seconds1).nativeDate.getMonth()).toBe(9)
  })

  test('nativeDate.getDay should to be 0', () => {
    expect(instance(seconds1).nativeDate.getDay()).toBe(0)
  })

  test('nativeDate.getHours should to be 5', () => {
    expect(instance(seconds1).nativeDate.getHours()).toBe(5)
  })

  test('nativeDate.toDateString should to be 5', () => {
    expect(instance(seconds1).nativeDate.toDateString()).toBe('Sun Oct 01 2017')
  })

})