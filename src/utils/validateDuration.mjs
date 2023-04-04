import { BadRequestException } from '../errors/errors.mjs'

export const validateDuration = (duration) => {
  if (duration && duration.length) {
    if (isNaN(+duration)) {
      throw new BadRequestException('Duration should be a number')
    }
  } else {
    throw new BadRequestException('Duration field is obligatory')
  }
}
