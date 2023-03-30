import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express'
import cors from 'cors'
import Db from './src/db/index.mjs'
import bp from 'body-parser'
import dotenv from 'dotenv';
import {addUser, getUsers} from "./src/handlers/users.mjs";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const app = express()

app.use(cors())
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(express.static('public'))

app.post('/api/users', addUser)
app.get('/api/users', getUsers)
app.post('/api/users/:_id/exercises')
app.get('/api/users/:_id/logs')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

export const db = new Db('test.js')


