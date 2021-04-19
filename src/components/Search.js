import React from 'react';
import Data from './data.json';
import './style.css';

export default function Search() {
    let listarra=[];
    return (
        <>
        <div className="searchbar" >
            <input className='search' type="text" placeholder="Search..." />
            <button className="inputbtn" type='submit'>search</button>
            {
              Data.map((val)=>{
                  return <div className='booktitle'>
                     
                      </div>
              })  
            }
        </div>
        </>
    )
}
