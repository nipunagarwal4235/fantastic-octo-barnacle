import React from "react";

import Valorant from "../assets/img1.jpg";
import Pubg from "../assets/img2.jpg";
import Csgo from "../assets/img3.jpg";

const Games = () => {
  const games = [
    {
      name: "Valorant",
      img: Valorant,
      description:
        "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows",
      link: "/",
    },
    {
      name: "BGMI",
      img: Pubg,
      description:
        "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows",
      link: "/",
    },
    {
      name: "Csgo",
      img: Csgo,
      description:
        "Valorant is a free-to-play first-person hero shooter developed and published by Riot Games, for Microsoft Windows",
      link: "/",
    },
  ];
  return (
    <>
      <section className="games" id="games">
        <div className="card rgb">
          {games.map((game) => {
            return (
              <>
                <div className="card-image"></div>
                <div className="card-text">
                  <h2>Valorant</h2>
                  <p>
                    Valorant is a free-to-play first-person hero shooter
                    developed and published by Riot Games, for Microsoft Windows{" "}
                  </p>
                  <div className="btn">
                    <a href="#">
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
          })}
        </div>
      </section>
    </>
  );
};

export default Games;
