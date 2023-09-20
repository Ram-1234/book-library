import React from 'react';
import Data from './data.json';
import './style.css';

export default function Search() {

    return (
        <React.Fragment>
            <div className="searchbar" >
                <input className='search__field' type="text" placeholder="Search..." />
                <button className="inputbtn" type='submit'>search</button>
                {
                    Data.map((val) => {
                        return <div className='booktitle'>

                        </div>
                    })
                }
            </div>
        </React.Fragment>
    )
}
