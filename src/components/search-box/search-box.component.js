import React from 'react';

import './search-box.styles.css';

const SearchField = ({handleChange, placeholder}) => {



    return (
        <>
            <input className={`search`} type={`search`} name={`searchField`} placeholder={placeholder} onChange={handleChange}/>
        </>
    )

}

export default SearchField;