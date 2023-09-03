import useTodos from './useTodos'

function Footer() {
  const alltodos = useTodos().allTodos
  return (
    <>
      <span className="todo-count">
        <strong>
          {alltodos.data?.filter((todo) => todo.completed == false).length}
        </strong>{' '}
        item left
      </span>

      <ul className="filters">
        <li>
          <a className="selected" href="#/">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>

      <button className="clear-completed">Clear completed</button>
    </>
  )
}

export default Footer
