import React from "react";

export default function SimpleMovieView(props) {
  const [showModal, setShowModal] = React.useState(false);

  console.log(props.movieDetails.backdrop_path);
  return (
    <>
      <div
        class="rounded overflow-hidden hover:border-2 w-30 hover:border-red-900  p-2  shadow-lg"
        onClick={() => {
          setShowModal(true);

          console.log(props.movieDetails);
        }}
      >
        <img
          className="w-full h-full  "
          src={
            `https://image.tmdb.org/t/p/w500` + props.movieDetails.backdrop_path
          }
          alt="movie poster"
        />
      </div>
      {showModal ? (
        <>
          <div className="justify-center w-30 h-25 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <img
                className="w-full h-22  "
                src={
                  `https://image.tmdb.org/t/p/w500` +
                  props.movieDetails.backdrop_path
                }
                alt="movie poster"
              />
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-stone-300 outline-none focus:outline-none">
                <div className="px-6 pt-2 pb-2 text-center">
                  <span className="inline-block bg-red-800  rounded-full px-3 py-1 text-sm font-semibold text-slate-900 mr-2 mb-2">
                    {props.movieDetails.vote_average
                      ? props.movieDetails.vote_average
                      : "-"}
                  </span>
                  <span className="inline-block bg-red-800 rounded-full px-3 py-1 text-sm font-semibold text-slate-900 mr-2 mb-2">
                    {props.movieDetails.vote_count
                      ? props.movieDetails.vote_count
                      : "-"}
                  </span>
                  <span className="inline-block bg-red-800  rounded-full px-3 py-1 text-sm font-semibold text-slate-900 mr-2 mb-2">
                    {props.movieDetails.original_language}
                  </span>
                </div>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {props.movieDetails.title}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    {props.movieDetails.overview}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    maybe later
                  </button>
                  <button
                    className="bg-red-700 text-white active:bg-red-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    add to my list
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
