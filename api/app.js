const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id": "1",
      "title": "Book Review: In Cold Blood"
    },
    {
      "id": "2",
      "title": "Game Review: Pokemon Brillian Diamond"
    },
    {
      "id": "3",
      "title": "Show Review: Game of Thrones"
    },
    {
      "id": "4",
      "title": "Movie Review: Naruto: The Last"
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})