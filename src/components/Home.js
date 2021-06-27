import React,{useState} from 'react';
import Bookcatagory from'./Bookcatagory';
//import Search from './Search';
import './style.css';
import Book from './Books';
import Data from './data.json';
import Footer from './footer.js';
//import Mode from './Mode';

export default function Home(props) {
    console.log(props)
    let [colors,setColor]=useState("white");
    let [text,textColor]=useState("black");
    let [input,setInput]=useState("")
    let [newData,setnewData]=useState(Data)
     
    let setinput=(e)=>{
        setInput(e.target.value)
    }
    function submitInput(){
        newData=Data.filter(item=>item.title.toLowerCase().slice(0,input.length)===input.toLowerCase())
        //console.log(newData)
        setnewData(newData);
    }

    function colorChange(){
        if(colors==='white' || colors==='red'){
            setColor('black');
            textColor('white');
        }else if(colors==='black'){
            setColor('white');
            textColor('black');
        }else if(colors==='black'){
            setColor('red');
            textColor('green');
        }
    }

    const selectBook=()=>{
     console.log('hell')
    }

    return (
        <>
        <div className="main">
            <div className="headerbar">
            <h1 className="logo">Digital Library...</h1>
            <Bookcatagory onSubmit={selectBook}/>
           {/* serach bar */}
            <div className="searchbar" >
            <input className='search' type="text" onChange={setinput} value={input} placeholder="Search..." />
            <button className="inputbtn" onClick={submitInput} >search</button>
            </div>
            {/* <Mode/> */}
            <input type="button" onClick={colorChange}  className="colorsmode" value='color mode'/>
            </div>
            {/* <h2>Book list</h2> */}
            <div style={{background:colors ,color:text}}  className="bookhome" >
                {
                  input.length ? newData.map((val)=>{
                    return( 
                        <Book
                        color={text}
                        rates={val.rate}
                        imgsrc={val.image}
                        bstatus={val.status}
                        title={val.title}
                        status={val.writer}
                        link={val.website}
                        />
                    )
                })  :
                Data.map((val)=>{
                    return( 
                        <Book
                        color={text}
                        rates={val.rate}
                        imgsrc={val.image}
                        bstatus={val.status}
                        title={val.title}
                        status={val.writer}
                        link={val.website}
                        />
                    )
                })        
                }
            </div>
            <Footer/> 
        </div>
        {/* <footer/>  */}
        </>
    )
}


// onChange={(e)=>setInput(e.target.value)}