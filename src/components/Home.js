import React from 'react';
import Bookcatagory from'./Bookcatagory';
import Search from './Search';
import './style.css';
import Book from './Books';
import Data from './data.json';
import Mode from './Mode';

export default function Home() {
    return (
        <>
        <div className="main">
            <div className="headerbar">
            <h1 className="logo">Digital Library...</h1>
            <Bookcatagory/>
            <Search/>
            {/* <Mode/> */}
            </div>
            {/* <h2>Book list</h2> */}
            <div className="bookhome">
                {Data.map((val)=>{
                    return(
                        <Book
                        rates={val.rate}
                        imgsrc={val.image}
                        bstatus={val.status}
                        title={val.title}
                        status={val.writer}
                        link={val.website}
                        />
                    )
                })}
            </div>
        </div>
            
        </>
    )
}
