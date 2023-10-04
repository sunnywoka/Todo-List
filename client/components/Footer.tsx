import { useQuery } from '@tanstack/react-query'
import { fetchTodos } from '../apis/apiClient'
import useTodos from './useTodos'

interface Props {
  param: string
}

function Footer(props: Props) {
  //const alltodos = useTodos().allTodos
  const { data } = useQuery(['todos', props.param], () =>
    fetchTodos(props.param as string)
  )

  const deleteTodos = useTodos().mutationDeleteCompletedTodos
  function deleteCompletedTodos() {
    deleteTodos.mutate()
  }

  return (
    <>
      <span className="todo-count">
        <strong>
          {data?.filter((todo) => todo.completed == false).length}
        </strong>{' '}
        item left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" href="/all">
            All
          </a>
        </li>
        <li>
          <a href="/active">Active</a>
        </li>
        <li>
          <a href="/completed">Completed</a>
        </li>
      </ul>

      <button className="clear-completed" onClick={deleteCompletedTodos}>
        Clear completed
      </button>
    </>
  )
}

export default Footer
