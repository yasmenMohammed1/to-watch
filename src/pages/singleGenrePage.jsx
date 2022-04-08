import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard/movieCard";
import { useParams } from "react-router-dom";
const GenereMovies = () => {
  const [moviesBygenere, getGenerMovies] = useState([]);
  const props = useParams();
  const [offeset, changeOffeset] = useState(1);
  const [page, pageNumber] = useState(1);
  const apiKey = "e52ef21b96833b97ce76b3663ea32335";
  const params = useParams();
  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e52ef21b96833b97ce76b3663ea32335&with_genres=${props.id}&page=${offeset}`
      )
      .then((data) => {
        getGenerMovies(data.data.results);
        console.log(data);
      });
  };
  useEffect(() => {
    getMovies();
    console.log(params);
  }, []);
  return (
    <div class="p-10 bg-slate-900  grid-cols-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {moviesBygenere.map((movie) => {
        return <MovieCard movieDetails={movie}></MovieCard>;
      })}
      {
        <div class="container inline-block  justify-center mx-auto">
          <ul class="flex">
            <li>
              <button
                onClick={() => {
                  {
                    if (page < 500) {
                      pageNumber(page - 1);
                      changeOffeset(page);
                      getMovies();
                    }

                    console.log("offeset");
                  }
                }}
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-slate-800 hover:text-white"
              >
                Prev
              </button>
              {page}
              <button
                class="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-slate-800 hover:text-white"
                onClick={() => {
                  changeOffeset(page + 1);
                  getMovies();
                  pageNumber(page + 1);
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      }
    </div>
  );
};

export default GenereMovies;
