import React from "react";

export default function SimpleMovieView(props) {
  console.log(props.movieDetails.backdrop_path);
  return (
    <>
      <div class="rounded overflow-hidden hover:border-2  hover:border-red-900  p-2  shadow-lg">
        <img
          className="w-full h-full  "
          src={
            `https://image.tmdb.org/t/p/w500` + props.movieDetails.backdrop_path
          }
          alt="movie poster"
        />
      </div>
    </>
  );
}
