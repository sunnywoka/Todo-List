export interface NewTodo {
  task_detail: string
  priority: number
  completed: boolean
}

export interface Todo extends NewTodo {
  id: number
}
