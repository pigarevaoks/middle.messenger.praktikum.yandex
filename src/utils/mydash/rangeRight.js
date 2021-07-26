export default function rangeRight(start, end, step) {
  return range(start, end, step, true)
}

const baseRange = (start, end, step, isRight) => {
  let index = -1
  let length = Math.max(Math.ceil((end - start) / (step || 1)), 0)
  const result = new Array(length)

  while (length--) {
    result[isRight ? length : ++index] = start
    start += step
  }

  return result
}

function range(start, end, step, isRight) {
  if (end === undefined) {
    end = start
    start = 0
  }

  step = step === undefined ? (start < end ? 1 : -1) : step
  return baseRange(start, end, step, isRight)
}
