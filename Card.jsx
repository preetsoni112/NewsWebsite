import React, { useState } from "react";

function Card({ Image, Title, Desc }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedDesc = Desc?.slice(0, Math.floor(Desc.length / 3)) || "";

  return (
    <div
      className="grid w-64 border-red-700 border-y-4 bg-white rounded-lg shadow-lg overflow-hidden m-4 transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out"
      style={{ animation: "fadeIn 1s" }}
    >
      <div className="overflow-hidden">
        <img
          src={Image}
          alt="Img Not available"
          className="w-full h-40 object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-red-600">{Title}</h3>
        <p className="text-gray-600 text-sm mt-2">
          {isExpanded ? Desc : `${truncatedDesc}...`} 
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)} 
          className=" decoration-transparent font-semibold text-white p-3 bg-red-600 text-sm mt-3 rounded-md underline hover:bg-red-800 transition duration-200"
        >
          {isExpanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default Card;
