import React, { useState } from 'react';
import SearchBarForm from './SearchBarForm';

function SearchBarContainer() {
  const [query, setQuery] = useState('');

  const handleTextChange = ({ target }) => {
    setQuery(target.value)
  }

  return (
    <div>
      <SearchBarForm
        onTextChange={handleTextChange} />
      <p>Replicate Text: {query}</p>
    </div>
  );
};

export default SearchBarContainer;