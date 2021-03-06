import React, { useState, useEffect, useRef } from "react";
import axios from "./../axios";
import Thumbnail from "./Thumbnail";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const ref = useRef(null);
  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

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
    <div className="h-40 space-y-0.5 md:space-y-2 ">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>

      <div className="group relative md:-ml-2">
        <ChevronLeftIcon
          onClick={() => scroll(-450)}
          className="absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        />
        <div
          ref={ref}
          className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} />
          ))}
        </div>
        <ChevronRightIcon
          onClick={() => scroll(450)}
          className="absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
        />
      </div>
    </div>
  );
}

export default Row;
