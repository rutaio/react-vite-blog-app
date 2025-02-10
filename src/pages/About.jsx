import { useState } from 'react';
import { SearchContainer } from '../components/SearchContainer';

export const About = ({}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="about">
      <h1>About page</h1>

      <SearchContainer onSearch={handleSearch} />
      <p>{searchValue}</p>
    </div>
  );
};
