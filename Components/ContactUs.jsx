import React from "react";

import {
  FaLocationArrow,
  FaClock,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactUs = () => {
  const info = [
    {
      icon: <FaLocationArrow size={25} />,
      title: "Location",
      fieldInfo: "67, NH 48, Kapriwas ,",
      linetwo: " Haryana , India - 122413.",
    },
    {
      icon: <FaClock size={25} />,
      title: "Open Hours",
      fieldInfo: "Monday - Saturday",
      linetwo: " 11:00 A.M. - 23:00 P.M.",
    },
    {
      icon: <FaEnvelope size={25} />,
      title: "Email",
      fieldInfo: "sierra@bmu.edu.in",
      linetwo: "contact@bmu.edu.in",
    },
    {
      icon: <FaPhoneAlt size={25} />,
      title: "Call",
      fieldInfo: "+91 99989 99989",
      linetwo: "+91 90349 02279",
    },
  ];
  return (
    <>
      <div className="max-w-lg pt-8 mx-auto text-center">
        <h2 className="text-3xl font-poppins text-white font-bold sm:text-4xl">
          <span className="underline  decoration-purple-700 decoration-4 underline-offset-2">
            Conta
          </span>
          ct Us
        </h2>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
        <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {info.map((item) => {
            return (
              <>
                <div className="max-w-md text-center">
                  <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 hover:bg-purple-700">
                    {item.icon}
                  </div>
                  <h6 className="mb-2 font-semibold uppercase text-white leading-5">
                    {item.title}
                  </h6>
                  <p className="mb-3 text-sm text-white">
                    {item.fieldInfo} <br />
                    {item.linetwo}
                  </p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ContactUs;
