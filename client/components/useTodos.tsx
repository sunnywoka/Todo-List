import { useQueryClient } from '@tanstack/react-query'
import { useMutation } from '@tanstack/react-query'
import {
  addTodo,
  completeTodo,
  deleteCompletedTodo,
  deleteTodo,
  updateTodo,
} from '../apis/apiClient.ts'
import { Todo, NewTodo } from '../../models/Todo.ts'

function useTodos() {
  const queryClient = useQueryClient()

  // const { data, isLoading, isError } = useQuery(['todos'], fetchTodos)
  // const allTodos = { data, isLoading, isError }

  const mutationAdd = useMutation({
    mutationFn: (todo: NewTodo) => addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const mutationDelete = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const mutationUpdate = useMutation({
    mutationFn: (edit: Todo) => updateTodo(edit),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const mutationComplete = useMutation({
    mutationFn: (edit: Todo) => completeTodo(edit),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  const mutationDeleteCompletedTodos = useMutation({
    mutationFn: () => deleteCompletedTodo(),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos'])
    },
  })

  return {
    mutationAdd,
    mutationDelete,
    mutationUpdate,
    mutationComplete,
    mutationDeleteCompletedTodos,
  }
}

export default useTodos
