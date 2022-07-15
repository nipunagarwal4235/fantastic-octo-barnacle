import React from "react";

const NavBar = () => {
  const links = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About Us",
      route: "/about",
    },
    {
      name: "Games",
      route: "/game",
    },
    {
      name: "Contact Us",
      route: "/contact",
    },
    {
      name: "Social Media",
      route: "/follow",
    },
  ];

  return (
    <>
      <header className="p-4 bg-black text-white z-50">
        <div className="container flex  justify-between h-12 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex font-poppins tracking-widest font-extrabold text-xl uppercase decoration-purple-700 underline underline-offset-4 decoration-4 items-center p-2"
          >
            Sierra 1UP
          </a>
          <ul className="items-stretch hidden space-x-3 md:flex">
            {links.map((link) => {
              return (
                <li className="flex">
                  <a
                    rel="noopener noreferrer"
                    href={link.route}
                    className="flex font-poppins items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default NavBar;
