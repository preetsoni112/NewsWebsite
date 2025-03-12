import React from "react";
import logo from "../img/logo.png";
import bg from "../img/bg3.jpg";
import { Link, NavLink } from "react-router-dom";

function Home({ query, setQuery }) {
  const showNewsViaCategory = (category) => {
    setQuery(category.name);
  };

  const SearchQuery = () => {
    const data = document.querySelector("#searchInput").value;
    const searchResult = document.querySelector("#SearchResult");
    setQuery(data);
    if (query) {
      document.querySelector("#searchInput").classList.add("bg-green-200");
      searchResult.classList.toggle("invisible");
      searchResult.textContent = `You can see " ${data} " News in these news`;
      document.querySelector("#searchInput").value = "";
    }
  };

  const categories = [
    { name: "Entertainment", image: "entertainment.jpg" },
    { name: "Technology", image: "technology.jpg" },
    { name: "Sports", image: "sports.jpg" },
    { name: "Music", image: "music.jpg" },
    { name: "Politics", image: "politics.jpg" },
  ];

  return (
    <div
      id="home"
      className="bg-blue-100 bg-cover shadow-md p-4"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="rounded-full w-16 h-16 transition-transform duration-500 hover:scale-110"
              src={logo}
              alt="Logo"
            />
          </Link>
          <Link to="/" className="ml-4 text-white text-xl font-bold">
            Hot <span className="text-red-500">News</span>
          </Link>
        </div>

        <nav className="text-white md:shadow-xl md:bg-white md:flex p-4 items-center rounded-lg justify-center space-x-8 font-semibold text-lg">
          <li className="hidden max-w-screen-md md:flex list-none hover:scale-110 transition-transform duration-300 hover:text-red-600 whitespace-nowrap">
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
          <li className="hidden md:flex list-none hover:scale-110 transition-transform duration-300 hover:text-red-600 whitespace-nowrap">
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              About
            </NavLink>
          </li>
          <li className="hidden md:flex list-none hover:scale-110 transition-transform duration-300 hover:text-red-600 whitespace-nowrap">
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Contact Us
            </NavLink>
          </li>
          <li className="hidden md:flex list-none hover:scale-110 transition-transform duration-300 hover:text-red-600 whitespace-nowrap">
            <NavLink
              to="/privacyPolicy"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Privacy Policy
            </NavLink>
          </li>
          <li className="hidden md:flex list-none hover:scale-110 transition-transform duration-300 hover:text-red-600 whitespace-nowrap">
            <NavLink
              to="/terms"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
            >
              Terms &amp; Conditions
            </NavLink>
          </li>
        </nav>
      </div>

      <div className="flex justify-center mt-10 items-center">
        <input
          id="searchInput"
          className="p-3 absolute w-80 border rounded-full text-sm text-blue-600 focus:outline-none ring-1 focus:ring-blue-100"
          onChange={(e) => e.target.value}
          type="text"
          placeholder="Search..."
        />
        <button
          type="button"
          onClick={SearchQuery}
          className="relative text-blue-700 hover:text-blue-500 focus:outline-none left-32"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56.966 56.966"
            fill="currentColor"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
          </svg>
        </button>
      </div>

      <div className="py-10">
        <div className="container mx-auto">
          <h2
            className="text-3xl font-bold text-center text-red-600 mb-8"
            style={{ textShadow: "2px 1px 1px black" }}
          >
            Some News Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => showNewsViaCategory(category)}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              >
                <a href="#">
                  <img
                    src={`./src/img/${category.image}`}
                    alt={category.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="cursor-pointer absolute inset-0 bg-blue-900 bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h3 className="text-xl text-white font-bold">
                      {category.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" rounded-lg flex text-center">
        <div
          id="SearchResult"
          className="p-5 text-white shadow-lg font-semibold invisible"
        ></div>
      </div>
    </div>
  );
}

export default Home;
