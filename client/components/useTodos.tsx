import { useQueryClient } from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiClient.ts'

function useTodos() {
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery(['todos'], fetchTodos)
  const allTodos = { data, isLoading, isError }
  return { allTodos }
}

export default useTodos
