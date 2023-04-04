export const CREATE_USER = 'INSERT INTO Users (username) VALUES (?)'
export const GET_USER_BY_ID = 'SELECT * FROM Users WHERE _id = ?'
export const GET_USERS = 'SELECT * FROM Users'
export const ADD_EXERCISE = 'INSERT INTO Exercises (userId, duration, description, date) VALUES (?, ?, ?, ?)'
export const GET_EXERCISE = 'SELECT * FROM Exercises WHERE userId = ?'
export const GET_EXERCISES_BY_USER_ID = 'SELECT duration, description, date FROM Exercises WHERE userId = ?'
