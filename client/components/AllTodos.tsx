import useTodos from './useTodos'

function AllTodos() {
  const alltodos = useTodos().allTodos
  const deleteTodo = useTodos().mutationDelete

  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {alltodos.data?.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed == true ? 'completed' : ''}
          >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label key={todo.id}>{todo.task_details}</label>
              <button
                className="destroy"
                onClick={() => deleteTodo.mutate(todo.id)}
              ></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllTodos
