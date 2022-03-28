export function setDateYear(date: Date, year: number) {
  const dateInstance = new Date(date)
  dateInstance.setFullYear(year)
  return dateInstance
}

export function setDateMonth(date: Date, month: number) {
  const dateInstance = new Date(date)
  dateInstance.setMonth(month)
  return dateInstance
}

export function setDateDay(date: Date, day: number) {
  const dateInstance = new Date(date)
  dateInstance.setDate(day)
  return dateInstance
}

export function offsetDateYear(date: Date, offset = 0) {
  return setDateMonth(date, date.getFullYear() + offset)
}

export function offsetDateMonth(date: Date, offset = 0) {
  return setDateMonth(date, date.getMonth() + offset)
}

export function offsetDateDay(date: Date, offset = 0) {
  return setDateDay(date, date.getDate() + offset)
}




export function getFirstWeekday(date: Date) {
  const dateInstance = setDateDay(date, 1)
  return dateInstance.getDay()
}

export function getLastDate(date: Date) {
  const newDate = new Date(date)

  newDate.setDate(1)
  newDate.setMonth(newDate.getMonth() + 1)
  newDate.setDate(0)

  return newDate.getDate()
}