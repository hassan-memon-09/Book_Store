import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const API_KEY = process.env.GOOGLE_BOOKS_API_KEY;

export const getBook = async (req, res) => {
  try {
    const { query = 'fiction', maxResults = 20 } = req.query; // Query params for search
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: query, // e.g., "fiction", "inauthor:Rowling", "intitle:Harry Potter"
        maxResults,
        key: API_KEY,
      },
    });

    const books = response.data.items.map(item => ({
      id: item.id,
      name: item.volumeInfo.title,
      title: item.volumeInfo.subtitle || item.volumeInfo.title,
      category: item.volumeInfo.categories?.[0] || 'General',
      image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
      price: Math.floor(Math.random() * 50) + 10, // Fake price
      authors: item.volumeInfo.authors?.join(', ') || 'Unknown',
    }));

    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching books:', error.message);
    res.status(500).json({ message: 'Error fetching books' });
  }
};
export const getFreeBook = async (req, res) => {
  try {
    const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
      params: {
        q: 'subject:free',
        filter: 'free-ebooks',
        maxResults: 10,
        key: API_KEY,
      },
    });

    const books = response.data.items.map(item => ({
      id: item.id,
      name: item.volumeInfo.title,
      title: item.volumeInfo.subtitle || item.volumeInfo.title,
      category: item.volumeInfo.categories?.[0] || 'Free',
      image: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150',
      price: 0, // Free books
      authors: item.volumeInfo.authors?.join(', ') || 'Unknown',
    }));

    res.status(200).json(books);
  } catch (error) {
    console.error('Error fetching free books:', error.message);
    res.status(500).json({ message: 'Error fetching free books' });
  }
};