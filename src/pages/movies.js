import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/movieCard";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Movies = () => {
  const [movies, getMovies] = useState([]);
  const [offeset, changeOffeset] = useState(1);
  const [page, pageNumber] = useState(1);
  const apiKey = "e52ef21b96833b97ce76b3663ea32335";
  const items = [];
  const getMoreMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${offeset}`
      )
      .then((data) => {
        getMovies(data.data.results);
      });
  };
  useEffect(() => {
    getMoreMovies();
  }, []);

  for (let i = 1; i < page; i++) {
    items.push(
      <>
        <li
          class="page-item"
          onClick={() => {
            changeOffeset(i);
            getMoreMovies();
            console.log(offeset);
            console.log(movies);
          }}
        >
          {i}
        </li>
      </>

      // <button
      //   onClick={() => {

      //   }}
      //   className="bg-slate-600 rounded-full"
      // >
      //   {i}
      // </button>
    );
  }
  return (
    <div>
      {movies.map((movie) => {
        return <MovieCard movieDetails={movie}></MovieCard>;
      })}
      <div class="container flex justify-center mx-auto">
        <ul class="flex">
          <li>
            <button
              onClick={() => {}}
              class="h-10 px-5 text-gray-600 bg-white border border-r-0 border-gray-600 hover:bg-gray-100"
            >
              Prev
            </button>
          </li>
          {items}
          <li>
            <button
              class="h-10 px-5 text-gray-600 bg-white border border-gray-600 hover:bg-gray-100"
              onClick={() => {
                pageNumber(page + 4);
              }}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Movies;
