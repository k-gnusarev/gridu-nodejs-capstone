import {BadRequestException} from "../errors/errors.mjs";

export const validateDate = (date) => {
  const regExp = /^(?:\d{4})-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/
  const [year, month, day] = date.split('-').map(Number);
  const isValidDate = !isNaN(new Date(date).getTime()) && (day >= 1 && day <= new Date(year, month, 0).getDate());

  if (!regExp.test(date)) {
    throw new BadRequestException('Wrong date format. Please enter valid date in yyyy-mm-dd format')
  }

  if (!isValidDate) {
    throw new BadRequestException('This date does not exist. Please enter valid date in yyyy-mm-dd format');
  }
}

