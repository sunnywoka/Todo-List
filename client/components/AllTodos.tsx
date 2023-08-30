import { useState } from 'react'
import useTodos from './useTodos'

function AllTodos() {
  const alltodos = useTodos().allTodos
  const deleteTodo = useTodos().mutationDelete
  const updateTodo = useTodos().mutationUpdate

  const [isEdit, setIsEdit] = useState(false)

  function handleEdit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsEdit(() => true)
    const form = new FormData(e.currentTarget)
    const editData = form.get('edit')?.valueOf() as string
    console.log(editData)
    // updateTodo.mutate({ editData })
    setIsEdit(() => false)
  }

  function handleStartEdit() {
    setIsEdit(() => true)
  }

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

              <label key={todo.id} onDoubleClick={handleStartEdit}>
                {/* {!isEdit ? (
                  todo.task_details
                ) : (
                  <form onSubmit={handleEdit}>
                    <input className="edit" value="Create a TodoMVC template" />
                  </form>
                )} */}
                {todo.task_details}
              </label>

              <button
                className="destroy"
                onClick={() => deleteTodo.mutate(todo.id)}
              ></button>
            </div>

            <form onSubmit={handleEdit}>
              <input className="edit" value="Create a TodoMVC template" />
            </form>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllTodos
