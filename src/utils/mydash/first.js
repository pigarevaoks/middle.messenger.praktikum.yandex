export const first = (list) => {
  if (Array.isArray(list)) {
    return list.shift()
  }

  return undefined
}
