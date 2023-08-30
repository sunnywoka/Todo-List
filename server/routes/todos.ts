import express from 'express'
import { getTodos, addTodo, deleteTodo, updateTodo } from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const todos = await getTodos()
    res.json(todos)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await addTodo(newTodo)
    res.sendStatus(201)
    //console.log(newTodo)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    await deleteTodo(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const editedTodo = req.body.task_details
    await updateTodo(id, editedTodo)
    //console.log(editedTodo)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) res.status(500).send(error.message)
  }
})

export default router
