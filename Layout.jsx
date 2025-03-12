import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Card from "./components/Card"

function Layout() {
  const [apiData, setApiData] = useState([]);
  const [query, setQuery] = useState("india");
  const location = useLocation();

  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=en&country=us&max=20&apikey=4ce736f9a8b258106fc51fb53574c82e`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data && data.articles) {
          setApiData(data.articles);
        } else {
          console.error("Unexpected API response:", data);
          setApiData([]);
        }
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, [query]);

  return (
    <>
      <Home query={query} setQuery={setQuery} />

      <Outlet />

      {location.pathname !== '/about' && (
        <div className="min-h-screen border-red-700 border-b-4 cards-container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4">
          {apiData.map((article, index) => (
            <Card
              key={index}
              Image={article.image || "placeholder.jpg"}
              Title={article.title || "No title available"}
              Desc={article.description || "No title available"}
            />
          ))}
        </div>
      )}
      
      <Footer />
    </>
  );
}

export default Layout;
