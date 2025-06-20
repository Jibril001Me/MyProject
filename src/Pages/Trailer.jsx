import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Trailer = () => {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState('');

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=fe279c453b73742021371abf74a02aac`
        );
        const videos = res.data.results;
        const trailer = videos.find(v => v.type === 'Trailer' && v.site === 'YouTube');
        if (trailer) {
          setVideoKey(trailer.key);
        }
      } catch (err) {
        console.error('Error fetching trailer:', err);
      }
    };

    fetchVideo();
  }, [id]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black p-4">
      {videoKey ? (
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="YouTube Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="max-w-4xl w-full"
        />
      ) : (
        <p className="text-white text-xl">Trailer Not Available</p>
      )}
    </div>
  );
};

export default Trailer;