import Image from "next/image";

function Thumbnail({ movie }) {
  const base_url = "https://image.tmdb.org/t/p/original";
  return (
    <div
      className={`relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105`}
    >
      <Image
        src={`${base_url}${movie.poster_path || movie.backdrop_path}`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumbnail;
