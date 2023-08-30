import { useState } from 'react'
import useTodos from './useTodos'
import { Todo } from '../../models/Todo'

function AllTodos() {
  const alltodos = useTodos().allTodos
  const deleteTodo = useTodos().mutationDelete
  const updateTodo = useTodos().mutationUpdate

  const [isEdit, setIsEdit] = useState(0)
  const [input, setInput] = useState('')

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsEdit(0)
      setInput(input)
    }
    if (e.key === 'Enter') {
      updateTodo.mutate({
        id: 1,
        task_details: input,
        priority: 1,
        completed: false,
      } as Todo)
      setInput('')
      setIsEdit(0)
    }
  }

  function handleStartEdit(id: number) {
    setIsEdit(id)
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

              <label
                key={todo.id}
                onDoubleClick={() => handleStartEdit(todo.id)}
              >
                {isEdit !== todo.id ? (
                  todo.task_details
                ) : (
                  <input
                    className="new-todo"
                    placeholder="What needs to be changed?"
                    autoFocus={true}
                    onKeyDown={handleKeyDown}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                )}
              </label>

              <button
                className="destroy"
                onClick={() => deleteTodo.mutate(todo.id)}
              ></button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllTodos
