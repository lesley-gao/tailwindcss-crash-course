import React from "react";

//Footer component: at the bottom of the webpage, display the copyright logo and the current year.

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-300 text-white text-center font-bold py-5 font-caveat dark:bg-night-500">
      <p className="text-md">Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
