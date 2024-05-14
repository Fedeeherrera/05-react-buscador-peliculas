import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useState } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (search == '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.length < 2) {
      setError('La busqueda debe tener a menos 2 caracteres')
      return
    }
    setError(null)
  }, [search])
  return { search, updateSearch, error }
}

function App() {
  const { movies } = useMovies()
  const { search, updateSearch, error } = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log({ search })
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    updateSearch(event.target.value)
  }

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form onSubmit={handleSubmit} className='form' action="">
            <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' type="text" placeholder='Avengers, The Matris, Star Wars...' />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </header>
        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
