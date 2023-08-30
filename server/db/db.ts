import { NewTodo, Todo } from '../../models/Todo.ts'
import connection from './connection.ts'

export function getTodos(db = connection): Promise<Todo[]> {
  return db<Todo>('todos').select()
}

export function addTodo(todo: NewTodo, db = connection): Promise<NewTodo> {
  return db<Todo>('todos').insert(todo)
}

export function deleteTodo(id: number, db = connection): Promise<Todo> {
  return db<Todo>('todos').where('id', id).delete()
}
