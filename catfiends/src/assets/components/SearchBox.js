import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='p2'>
            <input 
             className='pa3 ba b--red bg-lightest-blue'
             type='search' 
             placeholder='search cats' 
             onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;