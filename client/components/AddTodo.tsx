// eslint-disable-next-line no-unused-vars

import React, { useState } from 'react'
import useTodos from './useTodos'
import { NewTodo } from '../../models/Todo'
function AddTodo() {
  const mutation = useTodos()
  const [input, setInput] = useState('')

  const handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      mutation.mutationAdd.mutate({
        task_details: input,
        priority: 1,
        completed: false,
      } as NewTodo)
      setInput('')
    }
  }
  return (
    <>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        onKeyDown={handleAddTodo}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  )
}

export default AddTodo
