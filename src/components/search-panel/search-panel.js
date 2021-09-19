import React from 'react';

import './search-panel.css'

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle= {
        fontSize: '20px'
    };

    return <input
        style={searchStyle}
        placeholder={searchText}
        autoComplete=""
        tabIndex=""
        className="foo"

    />
};

export default SearchPanel