import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 bg-white dark:bg-gray-900">
      <div className="text-center space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Dive into a world of knowledge with our curated selection of books
          across genres.
        </h1>
        <Link to="/">
          <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 duration-300">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {book.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;