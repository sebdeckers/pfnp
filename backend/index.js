import database from './database.json'

import express from 'express'
const app = express()

app.use(express.static('dist'))

app.get('/friends', (req, res) => {
  res.json(database.friends)
})

app.get('/friends/:id', (req, res) => {
  const byId = ({id}) => id === +req.params.id
  const result = database.friends.find(byId)
  if (result) res.json(result)
  else res.status(404).end()
})

const server = app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${server.address().port}`)
)
