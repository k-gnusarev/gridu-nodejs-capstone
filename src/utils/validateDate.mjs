import {BadRequestException} from "../errors/errors.mjs";

export const validateDate = (date) => {
  const regExp = /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/

    if (!regExp.test(date)) {
      throw new BadRequestException('Wrong date format')
    }
}

