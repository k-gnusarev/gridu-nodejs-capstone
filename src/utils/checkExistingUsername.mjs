import { db } from '../db/index.mjs';
import { GET_USERS } from '../handlers/queries.mjs';

export const checkExistingUsername = async (username) => {
    const users = await db.all(GET_USERS)

    return users.some(user => user.username === username)
}
