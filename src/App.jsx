import { useState, useEffect } from 'react';
import axios from 'axios';
import { Home } from './pages/Home';
import { api } from './constants/globalConstants';
import { BlogPage } from './pages/BlogPage';

export const App = () => {
  const [blogs, setBlogs] = useState([]);

  // setSelectedBlog nusako blogo elgsena:
  const [selectedBlog, setSelectedBlog] = useState(null);

  const fetchBlogs = async () => {
    const response = await axios.get(api);
    setBlogs(response.data);
  };

  const handleBlogClick = (value) => {
    setSelectedBlog(value);
  };

  // grizus i home, norim naujos info:
  const resetSelectedBlog = () => {
    setSelectedBlog(null);
    fetchBlogs();
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
      {/* Jeigu yra pasirinktas blogas, tampa true reiksme ir atvaizduoja BlogPage.jsx: */}
      {selectedBlog ? (
        <BlogPage
          blogContent={selectedBlog}
          handleBackToHomeClick={resetSelectedBlog}
        />
      ) : (
        // Jeigu blogas nera pasirinktas, atvaizduoja bendrini Home page:
        <Home blogs={blogs} onBlogClick={handleBlogClick} />
      )}
    </div>
  );
};
