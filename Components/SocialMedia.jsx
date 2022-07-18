import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      <div className="max-w-lg py-8 mx-auto text-center">
        <h2 className="text-3xl font-poppins text-white font-bold sm:text-4xl">
          <span className="underline  decoration-purple-700 decoration-4 underline-offset-2">
            Follo
          </span>
          w Us
        </h2>
      </div>
      <section class="icons" id="icons">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gvyUuxdRdR4"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FaFacebookF />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gvyUuxdRdR4"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FaTwitter />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gvyUuxdRdR4"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FaInstagram />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gvyUuxdRdR4"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FaLinkedinIn />
              </span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=gvyUuxdRdR4"
              target="_blank"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>
                <FaWhatsapp />
              </span>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};

export default SocialMedia;
