export const getTimestamp = (dateString) => {
  const parsedDate = new Date(dateString)

  return parsedDate.getTime()
}
