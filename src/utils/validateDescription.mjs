import {BadRequestException} from "../errors/errors.mjs";

export const validateDescription = (description) => {
  if (!description) {
    throw new BadRequestException('Description field is obligatory')
  }
}
