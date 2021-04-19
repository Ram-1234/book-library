import React,{useState} from 'react';
import Bookcatagory from'./Bookcatagory';
import Search from './Search';
import './style.css';
import Book from './Books';
import Data from './data.json';
import Footer from './footer.js';
//import Mode from './Mode';

export default function Home() {

    let [colors,setColor]=useState("white");
    let [text,textColor]=useState("black");
    

    function colorChange(){
        if(colors=='white' || colors=='red'){
            setColor('black');
            textColor('white');
        }else if(colors=='black'){
            setColor('white');
            textColor('black');
        }else if(colors=='black'){
            setColor('red');
            textColor('green');
        }
    }

    return (
        <>
        <div className="main">
            <div className="headerbar">
            <h1 className="logo">Digital Library...</h1>
            <Bookcatagory/>
            <Search/>
            {/* <Mode/> */}
            <input type="button" onClick={colorChange} style={{color:text}} className="colorsmode" value='color mode'/>
            </div>
            {/* <h2>Book list</h2> */}
            <div style={{background:colors ,color:text}}  className="bookhome" >
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
            <Footer/> 
        </div>
        {/* <footer/>  */}
        </>
    )
}
