import { useQueryClient } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import { addTodo, deleteTodo, fetchTodos } from '../apis/apiClient.ts'
import { NewTodo } from '../../models/Todo.ts'

function useTodos() {
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery(['todos'], fetchTodos)
  const allTodos = { data, isLoading, isError }

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

  return { allTodos, mutationAdd, mutationDelete }
}

export default useTodos
