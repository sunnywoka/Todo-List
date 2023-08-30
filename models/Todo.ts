export interface NewTodo {
  task_details: string
  priority: number
  completed: boolean
}

export interface Todo extends NewTodo {
  id: number
}
