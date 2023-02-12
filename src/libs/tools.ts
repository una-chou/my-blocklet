import dayjs from 'dayjs'

export function FormatNumbers(number: number | string) {
  return number.toLocaleString()
}

export function FormatHash(number: string) {
  return number.slice(0,4) + '-' + number.slice(-4)
}

export function FormatTime(number: number) {
  return dayjs.unix(number).format('MMMM DD, YYYY HH:mm:ss')
}

export function FormatTableTime(number: number) {
  return dayjs.unix(number).format('MM/DD/YYYY, HH:mm:ss')
}