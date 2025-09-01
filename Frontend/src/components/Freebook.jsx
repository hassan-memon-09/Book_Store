import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import axios from 'axios';
import Cards from './Cards';

function Freebook() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4001/book/free');
        setBooks(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    getBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 bg-base-200">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-primary">Free Books</h1>
        <p className="text-md text-base-content/80">Enjoy these free reads from public domain and open sources.</p>
      </div>
      <Slider {...settings} className="mt-6">
        {books.map((item) => (
          <Cards item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
}

export default Freebook;