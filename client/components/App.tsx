import { useParams } from 'react-router-dom'
import AddTodo from './AddTodo.tsx'
import AllTodos from './AllTodos.tsx'
import Footer from './Footer.tsx'

function App() {
  const { param } = useParams()

  return (
    <section id="app" className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <AllTodos param={param as string} />
      </section>
      <footer className="footer">
        <Footer param={param as string} />
      </footer>
    </section>
  )
}

export default App
