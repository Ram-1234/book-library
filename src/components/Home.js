import React, { useEffect, useState } from 'react';
import Bookcatagory from './Bookcatagory';
import './style.css';
import Book from './Books';
import Data from './data.json';
import Footer from './footer.js';
import Modal from "./modal/modal"



export default function Home() {
    let [colors, setColor] = useState("white");
    let [text, textColor] = useState("black");
    let [input, setInput] = useState("")
    let [newData, setnewData] = useState(Data)
    let [type, setType] = useState("all")
    let [showDetails, setShowDetails] = useState(false);
    const [details, setDetails] = useState('');

    console.log("showDetails", showDetails);

    function defaultType(e) {
        setType(e.target.value)
    }

    useEffect(() => {
        if (type === 'all') {
            setnewData(Data)
        } else {
            let data = Data.filter(book => { return book.status.toLowerCase() === type.toLowerCase() })
            setnewData(data)
        }
    }, [type])



    let setinput = (e) => {
        setInput(e.target.value)
    }

    function submitInput() {
        // newData=Data.filter(item=>item.title.toLowerCase().slice(0,input.length)===input.toLowerCase())
        newData = Data.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
        setnewData(newData);
    }

    function colorChange() {
        if (colors === 'white' || colors === 'red') {
            setColor('black');
            textColor('white');
        } else if (colors === 'black') {
            setColor('white');
            textColor('black');
        } else if (colors === 'black') {
            setColor('red');
            textColor('green');
        }
    }

    function showBookHandler(data) {
        setShowDetails(true);
        setDetails(data);
        console.log('data', data);
    }

    function closeDetails() {
        setShowDetails(false);
    }




    return (
        <>
            <div className="main">
                <div className="headerbar">
                    <h1 className="logo">Digital Library...</h1>
                    <Bookcatagory defaultType={defaultType} />
                    {/* serach bar */}
                    <div className="searchbar" >
                        <input className='search' type="text" onChange={setinput} value={input} placeholder="Search..." />
                        <button className="inputbtn" onClick={submitInput} >search</button>
                    </div>
                    {/* <Mode/> */}
                    <input type="button" onClick={colorChange} className="colorsmode" value='color mode' />
                </div>
                {/* <h2>Book list</h2> */}
                <div style={{ background: colors, color: text }} className="bookhome" >
                    {
                        newData.length > 0 ?
                            newData.map((val, ind) => {
                                return (
                                    <Book
                                        id={ind}
                                        color={text}
                                        rates={val.rate}
                                        imgsrc={val.image}
                                        bstatus={val.status}
                                        title={val.title}
                                        status={val.writer}
                                        link={val.website}
                                        discreption={val.description}
                                        showBookHandler={showBookHandler}
                                    />
                                )
                            }) : <h1 style={{ color: "#f48c06", fontFamily: "cursive" }}>Book Not Found!📓</h1>

                    }
                </div>
                {showDetails && <Modal closeHandle={closeDetails} data={details} />}
                <Footer />
            </div>
            {/* <footer/>  */}
        </>
    )
}


// onChange={(e)=>setInput(e.target.value)}
