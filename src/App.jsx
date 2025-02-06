import { useState, useEffect } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { api } from './constants/globalConstants';

export const App = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get(api);
    setBlogs(response.data);
  };

  // useEffect - naudojamas norint atlikti veiksmus, kai komponentas yra sugeneruojamas
  // [] - tuscias masyvas reiskia, kad veiksmai esantys useEffect viduje, bus atliekami tik 1 karta
  useEffect(() => {
    fetchBlogs();
  }, []);

  // panaudojame props - blogs, kurie bus idedami i Home:
  return (
    <div className="app">
      <Home blogs={blogs} />
    </div>
  );
};
