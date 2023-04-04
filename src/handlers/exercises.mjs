import {validateDate} from "../utils/validateDate.mjs";
import {validateDuration} from "../utils/validateDuration.mjs";
import {ADD_EXERCISE, GET_EXERCISE} from "./queries.mjs";
import {db} from "../../index.mjs";
import {getUser} from "./users.mjs";
import {NotFoundException} from "../errors/errors.mjs";
import {validateDescription} from "../utils/validateDescription.mjs";
import {getFormattedDate} from "../utils/getFormattedDate.mjs";
import {getTimestamp} from "../utils/getTimestamp.mjs";

export const createExercise = async (req, res) => {
  try {
    const {duration, description} = req.body
    let {date} = req.body
    const {_id} = req.params
    const user = await getUser(_id)

    if (!user) {
      throw new NotFoundException('User not found')
    }
    
    if(!date) {
      date = getFormattedDate(new Date().getTime())
    }

    validateDuration(duration)
    validateDescription(description)
    validateDate(date)

    await db.run(ADD_EXERCISE, _id, duration, description, getTimestamp(date))

    const exerciseRowData = getExerciseById(_id)
    const responseData = {
      userId: _id,
      exerciseID: exerciseRowData.lastID,
      duration,
      date,
      description
    }

    res.status(201).json(responseData)
  } catch (e) {
    console.error(e)
    res.status(e.code).json(e)
  }
}

export const getExerciseById = async (id) => {
  return await db.run(GET_EXERCISE, id)
}
