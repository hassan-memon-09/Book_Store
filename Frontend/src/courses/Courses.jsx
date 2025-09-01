import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Course() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('fiction'); // Search state

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book?query=${search}&maxResults=20`);
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, [search]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 bg-base-100">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Explore Our Book Collection</h1>
        <input
          type="text"
          placeholder="Search books..."
          className="input input-bordered w-full max-w-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p className="text-md text-base-content/80 max-w-2xl mx-auto">
          Dive into a world of knowledge with our curated selection of books across genres.
        </p>
        <Link to="/">
          <button className="btn btn-outline btn-primary">Back to Home</button>
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Course;