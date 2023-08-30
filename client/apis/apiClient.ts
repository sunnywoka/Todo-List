/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'
import { Todo, NewTodo } from '../../models/Todo'
const todoUrl = '/api/v1/todos'

export async function fetchTodos() {
  const res = await request.get(todoUrl)
  return res.body as Todo[]
}

export async function deleteTodo(id: number) {
  await request.delete(todoUrl + `/${id}`)
}

export async function addTodo(todo: NewTodo) {
  await request.post(todoUrl).send(todo)
}

export async function updateTodo(todo: Todo) {
  await request.patch(todoUrl + `/${todo.id}`).send(todo)
  //console.log(todo.task_details)
}
