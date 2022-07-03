import React, { useState, useEffect } from "react";
import axios from "./../axios";
import Image from "next/image";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl.url);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="ml-5">
      <h2>{title}</h2>
      <div className="flex overflow-y-hidden overflow-x-scroll p-5">
        {movies.map((movie) => (
          <div key={movie} className=" relative h-80 row-poster">
            <Image
              src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
              layout="fill"
              alt={movie.name}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
