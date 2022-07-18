import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card-image"></div>
      <div className="card-text">
        <h2 className="font-poppins font-semibold text-center py-2 text-3xl">
          Valorant
        </h2>
        <p className="font-poppins font-extralight text-xs text-center ">
          Valorant is a free-to-play first-person hero shooter developed and
          published by Riot Games, for Microsoft Windows
        </p>
        <div className="btn font-poppins text-center uppercase text-white mx-14 my-5 font-thin tracking-widest text-xl p-4">
          <a href="#" className="">
            <div className="games-card">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            Register
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
