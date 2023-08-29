import express from 'express'
import { getTodos } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

export default router
