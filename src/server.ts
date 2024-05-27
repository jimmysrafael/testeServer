import express from 'express'
import { prismaClient } from './database'

const app = express()
app.use(express.json())

const port = process.env.PORT ?? 4000

app.get('/books', async (request, response) => {
  const books = await prismaClient.lumi.findMany()
  return response.json(books)
})



app.listen(port, () => console.log('Server is running on port ', port))
