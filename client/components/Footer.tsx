function Footer() {
  const data = [
    { id: 1, task_details: 'a good job', priority: 3, completed: true },
    { id: 2, task_details: 'a bad job', priority: 8, completed: false },
    { id: 3, task_details: 'Trello', priority: 1, completed: false },
  ]

  return (
    <>
      <span className="todo-count">
        <strong>0</strong> item left
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
