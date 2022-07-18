import React from "react";

const VideoGallery = () => {
  const videos = [
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/QdboHVD0Wig"
          title="Sunday Livestream || Sierra 1UP || First Livestream || Lets Goooo!!!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/CKJqVamYJ2Y"
          title="Do Re Mi | Sierra 1UP | Valorant Montage #2"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/8HdOMsxaa-8"
          title="Let Go | Sierra 1UP | Valorant Montage #1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/Tj2Nmor0Dqw"
          title="Playing Rocket league!!! || Sierra 1UP || Join fast to see pro gameplay!!!"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/GtJ5jeOVLro"
          title="FarCry 3 Gameplay || Episode #1|| No Commentary, pure gameplay || Sierra 1UP"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/szc1ut4PuIw"
          title="FarCry 3 Gameplay|| Saving Lisa today!!! || Episode #2|| No Commentary, Pure gameplay || Sierra 1UP"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/-kjq-K7Hl_I"
          title="FarCry 3 Gameplay || Its getting interesting!! || Episode #3|| No Commentary, Pure gameplay"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
    {
      embed: (
        <iframe
          width="1583"
          height="662"
          src="https://www.youtube.com/embed/DxuIV8p3K7E"
          title="FarCry 3 Gameplay || Saved 2 friends now || Episode #4|| No Commentary, Pure gameplay"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ),
    },
  ];
  return (
    <>
      <section className="py-6">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="max-w-lg py-8 mx-auto text-center">
            <h2 className="text-3xl font-poppins text-white font-bold sm:text-4xl">
              <span className="underline  decoration-purple-700 decoration-4 underline-offset-2">
                Stre
              </span>
              ams
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {videos.map((video, index) => {
              return (
                <>
                  <div key={index} className="aspect-w-16 aspect-h-9">
                    {video.embed}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoGallery;
