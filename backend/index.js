import database from './database.json'

import express from 'express'
const app = express()

app.get('/friends', (req, res) => {
  res.json(database.friends)
})

app.get('/friends/:id', (req, res) => {
  const byId = ({id}) => id === +req.params.id
  const result = database.friends.find(byId)
  if (result) res.json(result)
  else res.status(404).end()
})

const server = app.listen(3000, function () {
  const {port} = server.address()
  console.log(`Listening on port ${port}`)
})
