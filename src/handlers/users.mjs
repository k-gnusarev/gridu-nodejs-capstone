
import {CREATE_USER, GET_USER, GET_USERS} from "./queries.mjs";
import {BadRequestException, NotFoundException} from "../errors/errors.mjs";
import {db} from "../../index.mjs";

export const addUser = async (req, res) => {
  const {username} = req.body

  try {
    const {lastID} = await db.run(CREATE_USER, username);
    const user = await db.get(GET_USER, lastID)

    res.status(201).json({data: user})
  } catch (e) {
    console.error(e)
    res.status(400).json(e)
    throw new BadRequestException('User not specified')
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await db.all(GET_USERS)

    res.status(200).json({data:users})
  } catch (e) {
    console.error(e)
    res.status(404).json(e)
    throw new NotFoundException('Users not found')
  }
}
