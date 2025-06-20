import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

const HeroSection = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=fe279c453b73742021371abf74a02aac`
        );
        const randomMovie = res.data.results[Math.floor(Math.random() * res.data.results.length)];
        setMovie(randomMovie);
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    };

    fetchMovie();
  }, []);

  const truncateString = (str, num) => {
    if (!str) return '';
    return str.length > num ? str.slice(0, num) + '...' : str;
  };

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full relative'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black z-10'></div>

        <img
          className='w-full h-full object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className='absolute w-full top-[30%] p-4 md:p-8 z-20'>
          <h1 className='text-3xl md:text-5xl font-bold'>{movie?.title}</h1>
          <p className='text-gray-400 text-sm mt-2'>Released: {movie?.release_date}</p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200 mt-4 mb-4'>
            {truncateString(movie?.overview, 150)}
          </p>
          <div className='flex items-center gap-4'>
            <button className='flex items-center justify-center gap-2 border border-white bg-red-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              <FaPlay />
              Watch
            </button>

            {/* Dynamic trailer link */}
            {movie && (
              <Link
                to={`/trailer/${movie.id}`}
                className='flex items-center justify-center gap-2 border border-white bg-black/60 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded'
              >
                <FaPlay />
                Trailer
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;