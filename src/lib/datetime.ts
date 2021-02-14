import { formatToTimeZone } from 'date-fns-timezone'

export const getNowDatetime = (): string => {
  return formatToTimeZone(new Date(), 'YYYY-MM-DD HH:mm:ss', {
    timeZone: 'Asia/Tokyo',
  })
}
