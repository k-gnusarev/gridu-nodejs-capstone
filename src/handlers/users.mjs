import { CREATE_USER, GET_USER_BY_ID, GET_USERS } from './queries.mjs'
import { BadRequestException, NotFoundException } from '../errors/errors.mjs'
import { db } from '../db/index.mjs'
import { checkExistingUsername } from '../utils/checkExistingUsername.mjs'

export const addUser = async (req, res) => {
  const { username } = req.body

  try {
    if (!username) {
      throw new BadRequestException('User not specified')
    }

    if (await checkExistingUsername(username)) {
      throw new BadRequestException('User with this name already exists')
    }

    const { lastID } = await db.run(CREATE_USER, username)
    const user = await db.get(GET_USER_BY_ID, lastID)

    res.status(201).json({ data: user })
  } catch (e) {
    console.error(e)
    res.status(e.code).json(e)
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await db.all(GET_USERS)

    res.status(200).json({ data: users })
  } catch (e) {
    console.error(e)
    res.status(404).json(e)
    throw new NotFoundException('Users not found')
  }
}

export const getUser = async (id) => {
  return await db.get(GET_USER_BY_ID, id)
}
