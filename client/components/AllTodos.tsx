import { useEffect, useState } from 'react'
import { fetchTodos } from '../apis/apiClient'
import { Todo } from '../../models/Todo'

function AllTodos() {
  // const data = [
  //   { id: 1, task_details: 'a good job', priority: 3, completed: true },
  //   { id: 2, task_details: 'a bad job', priority: 8, completed: false },
  //   { id: 3, task_details: 'Trello', priority: 1, completed: false },
  // ]

  const [todos, setTodos] = useState([] as Todo[])

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    const data = await fetchTodos()
    setTodos(data)
  }

  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed == true ? 'completed' : ''}
          >
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label key={todo.id}>{todo.task_details}</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllTodos
