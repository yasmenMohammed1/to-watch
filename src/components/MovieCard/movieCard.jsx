import React from "react";

export default function MovieCard(props) {
  console.log(props.movieDetails);
  return (
    <div className="rounded overflow-hidden bg-slate-100 shadow-lg">
      <img
        className="w-full"
        src={
          `https://image.tmdb.org/t/p/w500` + props.movieDetails.backdrop_path
        }
        alt="movie poster"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-slate-900">
          {props.movieDetails.title}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.movieDetails.vote_average
            ? props.movieDetails.vote_average
            : "-"}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.movieDetails.vote_count ? props.movieDetails.vote_count : "-"}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.movieDetails.original_language}
        </span>
      </div>
    </div>
  );
}
