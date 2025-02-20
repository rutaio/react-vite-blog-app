import { useState } from 'react';

// issiunciam reiksme i tevini komponenta:
export const SearchContainer = ({ onSearch }) => {
  
  const [searchValue, setSearchValue] = useState('');

  // nusettina:
  // iskviecia props:
  const handleInputChange = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div
      className="search-container"
    >
      <input
        type="text"
        placeholder="Ieskoti.."
        value={searchValue}
        // si event mum atiduoda pats input, vienas is ju yra value
        onChange={(event) => handleInputChange(event.target.value)}
      />
    </div>
  );
};
