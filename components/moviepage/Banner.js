import React, { useState, useEffect } from "react";
import { InformationCircleIcon, PlayIcon } from "@heroicons/react/solid";
import Image from "next/image";
import axios from "../axios";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated.url);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          layout="fill"
          objectFit="cover"
          className="z-[-1]"
        />
      </div>
      <h1 className="z-50 text-5xl font-semibold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
    </div>
  );
}

export default Banner;
