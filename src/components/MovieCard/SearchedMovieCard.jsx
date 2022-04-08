import React from "react";

export default function SearchedMovieCard(props) {
  let shown = false;
  let apiKey = "e52ef21b96833b97ce76b3663ea32335";
  const [showModal, setShowModal] = React.useState(false);
  console.log(props.movieDetails);
  return (
    <>
      <div
        onClick={() => {
          setShowModal(true);

          console.log(props.movieDetails);
        }}
        type="button"
        className="rounded overflow-hidden hover:border-2  hover:border-red-900 hover:bg-slate-200 bg-slate-100 shadow-lg"
        data-modal-toggle="defaultModal"
      >
        <div className="px-6 py-2 text-center">
          <div className="font-bold text-xl mb-2 text-slate-900">
            {props.movieDetails.name
              ? props.movieDetails.name
              : props.movieDetails.title}
          </div>
        </div>
      </div>
    </>
  );
}
