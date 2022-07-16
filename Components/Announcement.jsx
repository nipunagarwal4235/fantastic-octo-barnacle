import React from "react";

const Announcement = () => {
  return (
    <>
      <div class="px-4 py-3 text-white bg-indigo-600 sm:justify-between sm:items-center sm:flex sm:px-6 lg:px-8">
        <p class="font-medium text-center sm:text-left">
          Love Alpine JS?
          <br class="sm:hidden" />
          Check out this new deep dive course!
        </p>

        <a
          class="block px-5 py-3 mt-4 text-sm font-medium text-center text-indigo-600 transition bg-white rounded-lg sm:mt-0 hover:bg-white/90 active:text-indigo-500 focus:outline-none focus:ring"
          href="/alpinejs"
        >
          Learn More
        </a>
      </div>
    </>
  );
};

export default Announcement;
