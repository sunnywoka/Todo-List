import db from './connection.ts'
import { Todo } from '../../models/Todo.ts'
import connection from './connection.ts'

export function getTodos(db = connection): Promise<Todo[]> {
  return db<Todo>('todos').select()
}
