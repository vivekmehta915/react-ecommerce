import debounce from 'lodash.debounce';
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = debounce((query) => {
        onSearch(query);
    }, 300);

    const handleChange = (event) => {
        setQuery(event.target.value);
        handleSearch(event.target.value);
    };

    return (
        <input type="text" value={query} onChange={handleChange} placeholder="Search products..." />
    );
};

export default SearchBar;
