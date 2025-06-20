import MovieCard from '../components/Card';
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../services/api';
import '../css/Vies.css';

function Vies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query || loading) return;

    setLoading(true);
    setError(null);

    try {
      const searchResults = await searchMovies(query);
      setMovies(searchResults);
    } catch (err) {
      console.error(err);
      setError("Failed to search movie...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home text-white">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : movies.length === 0 ? (
        <div className="no-results">No movies found.</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Vies;