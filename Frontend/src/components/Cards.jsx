import React from "react";

function Cards({ item }) {
  return (
    <div className="w-full max-w-xs bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-200 hover:scale-105">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
          {item.category}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {item.name}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {item.title || "No subtitle"}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 line-clamp-1">
          By: {item.authors || "Unknown"}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
            ${item.price}
          </span>
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;