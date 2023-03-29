import express from 'express'
import cors from 'cors'
import Db from "./src/db/index.mjs"
import bp from 'body-parser'
import dotenv from 'dotenv';
dotenv.config();

const app = express()

app.use(cors())
app.use(bp.urlencoded({extended: true}))
app.use(bp.json())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/api/users', (req, res) => {
  console.log(req)
  console.log('pow')
  res.writeHead(200)
  res.end('ok')
})
app.get('/api/users')
app.post('/api/users/:_id/exercises')
app.get('/api/users/:_id/logs')


const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

const db = new Db('test.js')
