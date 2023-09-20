import React, { useEffect, useState, Suspense, lazy } from 'react';
import Bookcatagory from './category/Bookcatagory';
import './styles/style.css';
import "./style.css"
// import Book from './book/Books';
import Data from './data/data.json';
import Footer from './footer/footer.js';
import Modal from "./modal/modal"
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Book = lazy(() => import('./book/Books'))

export default function Home() {
    let [colors, setColor] = useState("white");
    let [text, textColor] = useState("black");
    let [input, setInput] = useState("")
    let [newData, setnewData] = useState(Data)
    let [type, setType] = useState("all")
    let [showDetails, setShowDetails] = useState(false);
    const [details, setDetails] = useState({});

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
    }

    function closeDetails() {
        setShowDetails(false);
    }



    return (
        <React.Fragment>
            <div className="main">
                <div className="headerbar">
                    <h1 className="logo"><MenuBookIcon fontSize='32px' style={{ margin: "0 8px 0 0" }} /> Library</h1>
                    <div className='filter__container'>
                        {/* serach bar */}
                        <div className="searchbar" >
                            <input className='search__field' type="text" onChange={setinput} value={input} placeholder="Search..." />
                            <button className="search__btn" onClick={submitInput} >search</button>
                        </div>
                        <Bookcatagory defaultType={defaultType} />
                        {/* theme button */}
                        <div onClick={colorChange} className='color__mode__container'>
                            {/* <input type="color__mode"  className="colorsmode" value='color mode' /> */}
                            {colors === "white" ?
                                <LightModeIcon style={{ color: '#fff' }} /> :
                                <Brightness4Icon />
                            }
                        </div>
                    </div>
                </div>
                <Suspense fallback={<p>loading...</p>}>
                    <div style={{ background: colors, color: text }} className="bookhome" >
                        {
                            newData.length > 0 ?
                                newData.map((val, ind) => {
                                    return (
                                        <Book
                                            key={ind}
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
                </Suspense>
                {showDetails && <Modal closeHandle={closeDetails} data={details} />}
                <Footer />
            </div>
            {/* <footer/>  */}
        </React.Fragment>
    )
}


// onChange={(e)=>setInput(e.target.value)}
