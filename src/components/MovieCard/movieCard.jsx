import React from "react";

export default function MovieCard(props) {
  return (
    <div class="max-w-30 w-30 rounded overflow-hidden inline-flex shadow-lg ">
      <img
        class="w-25"
        src={
          `https://image.tmdb.org/t/p/w500/` + props.movieDetails.poster_path
        }
        alt="Sunset in the mountains"
      />
      <div class="px-4 py-4">
        <div class="font-bold text-xl mb-2">{props.movieDetails.title}</div>
        <p class="text-gray-700 text-base">{props.movieDetails.overview}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.movieDetails.vote_average}
        </span>
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          style={{
            display: props.movieDetails.vote_count ? "inline-flex" : "none",
          }}
        >
          {props.movieDetails.vote_count}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {props.movieDetails.original_language}
        </span>
      </div>
    </div>
  );
}
