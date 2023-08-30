import AddTodo from './AddTodo.tsx'
import AllTodos from './AllTodos.tsx'
import Footer from './Footer.tsx'

function App() {
  return (
    <section id="app" className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <AddTodo />
      </header>
      <section className="main">
        <AllTodos />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </section>
  )
}

export default App
