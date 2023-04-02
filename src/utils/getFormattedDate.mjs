export const getFormattedDate = (timestamp) => {
  const dateObj = new Date(timestamp)

  return dateObj.toISOString().slice(0, 10)
}
