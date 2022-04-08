import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/movieCard";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import SearchedMovieCard from "../components/MovieCard/SearchedMovieCard";
import { mockComponent } from "react-dom/test-utils";
const Movies = () => {
  const params = useParams(() => {
    console.log("intial");
  });
  const [movies, getMovies] = useState([]);
  const [offeset, changeOffeset] = useState(1);

  const [page, pageNumber] = useState(1);
  const [searched, setSearched] = useState(false);
  const getMoreMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${offeset}`
      )
      .then((data) => {
        getMovies(data.data.results);
        console.log(movies);
      });
  };
  const getSearchedMovied = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/company?api_key=e52ef21b96833b97ce76b3663ea32335&query=${params.search}&page=${offeset}`
      )
      .then((data) => {
        getMovies(data.data.results);
        console.log(movies);
      });
  };
  const apiKey = "e52ef21b96833b97ce76b3663ea32335";
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );

  useEffect(() => {
    if (params.search) {
      setSearched(true);
      getSearchedMovied();
    } else {
      setSearched(false);
    }
    getMoreMovies();
  }, []);

  return (
    <div class="p-10 bg-slate-900  grid-cols-1 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {movies.map((movie) => {
        if (searched) {
          return <SearchedMovieCard movieDetails={movie} />;
        } else {
          return <MovieCard movieDetails={movie}></MovieCard>;
        }
      })}
      {
        <>
          <ColoredLine color="red" />
          <div class="container inline-block  justify-center mx-auto">
            <ul class="flex">
              <li>
                <button
                  onClick={() => {
                    {
                      if (page < 500) {
                        pageNumber(page - 1);
                        changeOffeset(page);
                        if (params.search) {
                          getSearchedMovied();
                        } else {
                          getMoreMovies();
                        }
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
                    pageNumber(page + 1);
                    if (params.search) {
                      getSearchedMovied();
                    } else {
                      getMoreMovies();
                    }
                  }}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </>
      }
    </div>
  );
};
export default Movies;
