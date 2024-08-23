import React from "react";

function Navbar() {
  return (

<>      <div class="h-36  fixed top-0 inset-x-0 text-pink-900 bg-gray-200  bg-opacity-60 backdrop-blur-sm z-50 px-4 justify-between items-center">

        <nav className="flex items-center justify-between">

        <h1>Fried Resturent</h1>
        <ul className="flex space-x-4">
            <li className="hover:text-yellow-900 transition"> Home</li>
            <li className="hover:text-yellow-900 transition"> Contact Us </li>
          </ul>
         
        </nav>
      </div>{" "}

    </>
  );
}

export default Navbar;
