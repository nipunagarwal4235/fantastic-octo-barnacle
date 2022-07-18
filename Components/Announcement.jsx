import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="px-4 py-3 h-8 text-white bg-purple-700 sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8">
        <p className="font-medium text-center sm:text-left">
          PUBG Tournament is Live....
          <br className="sm:hidden" />
          Make your team and fightttt !!
        </p>

        <a
          className="block px-3 py-1 rounded-full mt-4 text-xs font-medium text-center text-purple-700 transition bg-white  sm:mt-0 hover:bg-white/90"
          href="/alpinejs"
        >
          Register Now
        </a>
      </div>
    </>
  );
};

export default Announcement;
