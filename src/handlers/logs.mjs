import {getUser} from "./users.mjs";
import {NotFoundException} from "../errors/errors.mjs";
import {db} from "../../index.mjs";
import {validateDate} from "../utils/validateDate.mjs";
import {getLimitedSearchString} from "../utils/getLimitedSearchString.mjs";
import {getTimestamp} from "../utils/getTimestamp.mjs";
import {getFormattedDate} from "../utils/getFormattedDate.mjs";

export const getExerciseLogs = async (req, res) => {
  try {
    const {_id} = req.params
    const user = await getUser(_id)

    if (!user) {
      throw new NotFoundException('User not found')
    }

    const {from, to, limit} = req.query

    if (from) {
      validateDate(from)
    }

    if (to) {
      validateDate(to)
    }

    const queryString = getLimitedSearchString({ from, to, limit })
    const fromFormatted = from && getTimestamp(from)
    const toFormatted = to && getTimestamp(to)
    const dates = [fromFormatted, toFormatted].filter(date => date !== undefined)

    const exerciseLogs = await db.all(queryString, _id, ...dates, limit)

    user.logs = exerciseLogs.map(ex => {
      return {
        ...ex,
        date: getFormattedDate(ex.date)
      }
    })
    user.count = exerciseLogs.length

    res.status(200).json(user)
  } catch (e) {
    console.error(e)
    res.status(e.code).json(e)
  }
}
