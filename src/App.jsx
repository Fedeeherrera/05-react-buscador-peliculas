import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useState } from 'react'

function App() {

  const { movies } = useMovies()

  const [query, setQuery] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log({query})
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form onSubmit={handleSubmit} className='form' action="">
            <input onChange={handleChange} value={query} name='query' type="text" placeholder='Avengers, The Matris, Star Wars...' />
            <button type='submit'>Buscar</button>
          </form>
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
