import React,{useState} from 'react';
import Bookcatagory from'./Bookcatagory';
import Search from './Search';
import './style.css';
import Book from './Books';
import Data from './data.json';
//import Mode from './Mode';

export default function Home() {
    let [colors,setColor]=useState("white");
   
   function colorChange(){
      if(colors==="white"){
          colors=setColor("black");
      }else{
          colors=setColor("white");
      }
   }
    return (
        <>
        <div className="main">
            <div className="headerbar">
            <h1 className="logo">Digital Library...</h1>
            <Bookcatagory/>
            <Search/>
            <h4 className="colorsmode" style={{color:{colors}}} onChange={colorChange}>Color Mode</h4>
            </div>
            {/* <h2>Book list</h2> */}
            <div style={{backgroundColor:{colors}}} className="bookhome">
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
