import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import './App.css'
import { Movies } from './components/Movies'

function App() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id : movie.imdbID,
    title : movie.Title,
    year : movie.Year,
    poster : movie.Poster,
  }))

  return (
    <>
      <div className='page'>
        <header>
          <h1>Buscador de Peliculas</h1>
          <form className='form' action="">
            <input type="text" placeholder='Avengers, The Matris, Star Wars...' />
            <button type='submit'>Buscar</button>
          </form>
        </header>

        <main>
          <Movies movies={mappedMovies}/>
        </main>
      </div>
    </>
  )
}

export default App
