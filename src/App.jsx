import { useState, useEffect } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { api } from './constants/globalConstants';

export const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get(api);
    setBlogs(response.data);
  };

  const handleBlogClick = (value) => {
    setSelectedBlog(value);
  };

  // useEffect - naudojamas norint atlikti veiksmus, kai komponentas yra sugeneruojamas
  // paleis tik tada, kai uzkraus
  // [] - tuscias masyvas reiskia, kad veiksmai esantys useEffect viduje, bus atliekami tik 1 karta
  // [kintamasis] - jeigu kintamasis pasikeicia, tai useEffect bus iskvieciamas dar karta
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="app">
      {/* klausimas?  true : false */}
      {/* tampa true reiksme: */}
      {selectedBlog ? (
        <>
          <div>{selectedBlog.id}</div>
          <div>{selectedBlog.name}</div>
          <div>{selectedBlog.description}</div>
        </>
      ) : (
        <Home blogs={blogs} onBlogClick={handleBlogClick} />
      )}
    </div>
  );
};
