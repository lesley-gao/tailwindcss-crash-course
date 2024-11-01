import React from "react";
import { BiSun, BiMoon } from "react-icons/bi";

// Header component: at the top of the webpage, display the logo, slogan and dark/light mode button.

function Header() {

  function toggleDarkMode() {
    window.document.documentElement.classList.toggle("dark");
  }

  return (
    <header className="relative">
      <div className=" mt-5 p-5 flex justify-center">
        <a href="http://localhost:5173/">
          <img src="https://see.fontimg.com/api/renderfont4/OVML6/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjQUU5M0Q3IiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/QWJvdXQgVGltZQ/unicorn-magic.png" alt="About Time" />
        </a>

        <div className="absolute top-10 right-10 p-5">
          <button onClick={toggleDarkMode} className="p-2 font-sans text-2xl bg-night-50 text-white rounded-full dark:bg-white dark:text-night-default"><BiSun className="hidden dark:block" /><BiMoon className="dark:hidden" /></button>
        </div>
      </div>

      <div>
        <p className="my-2 text-gray-600 text-2xl text-center font-caveat dark:text-white">We're all travelling through time together, every day of our lives.<br />All we can do is do our best to relish this remarkable ride.</p>
      </div>
    </header>
  );
}

export default Header;