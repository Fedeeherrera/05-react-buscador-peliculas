import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if(previousSearch.current === search) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const sortedMovies = sort 
  ? [...movies].sort((a,b) => a.year.localeCompare(b.year))
  : movies

  return { movies : sortedMovies, getMovies, loading }
}
