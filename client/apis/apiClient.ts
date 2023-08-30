/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Todo, NewTodo } from '../../models/Todo'
const todoUrl = '/api/v1/todos'

export async function fetchTodos() {
  const res = await request.get(todoUrl)
  return res.body as Todo[]
}

export async function deleteWidget(id: number) {
  await request.delete(todoUrl + `${id}`)
}

export async function addWidget(widget: NewTodo) {
  await request.post(todoUrl).send(widget)
}

export async function updateWidget(id: number, widget: NewTodo) {
  await request.put(todoUrl + `${id}`).send(widget)
}
