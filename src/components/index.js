import React, { useEffect, useState, Suspense, lazy } from 'react';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Bookcatagory from './category/Bookcatagory';
import './styles/style.css';
import "./style.css"
import Data from './data/data.json';
import Footer from './footer/footer.js';
import Modal from "./modal/modal"

const Book = lazy(() => import('./book/Books'))

export default function Home() {
    const [theme, setTheme]= useState({color:"white", text:"black", border:"none"});
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

    useEffect(()=>{
     let  filteredData  = Data.filter(item => item.title.toLowerCase().includes(input.toLowerCase()))
        setnewData(filteredData);
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[input])

    const setInputHandler = (e) => {
        setInput(e.target.value)
    }
    /** debounce concept */
    const debounce=(func, delay)=>{
        let timerId=null
        return function(...args){
            clearTimeout(timerId);
            timerId=setTimeout(()=>func(...args), delay);
        }
    }

    function colorChange() {
        if (theme.color === 'white') {
            setTheme((old)=>({...old, color:"black",text:"white", border:"1px solid #1B1B1B"}))
        } else if (theme.color === 'black') {
            setTheme((old)=>({...old, color:"white",text:"black", border:"none"}))
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
                            <input className='search__field' type="text" onChange={debounce(setInputHandler,1000)} placeholder="Search..." />
                        </div>
                        <Bookcatagory defaultType={defaultType} />
                        {/* theme button */}
                        <div onClick={colorChange} className='color__mode__container'>
                            {theme.color === "white" ?
                                <LightModeIcon style={{ color: theme.color }} /> :
                                <Brightness4Icon />
                            }
                        </div>
                    </div>
                </div>
                <div style={{ background: theme.color, color: theme.text }} className="bookhome" >
                <Suspense fallback={<p>loading...</p>}>
                    <div style={{ background: colors, color: text }} className="bookhome" >
                        {
                            newData.length > 0 ?
                                newData.map((val, ind) => {
                                    return (
                                        <Book
                                            key={ind}
                                            id={ind}
                                            color={theme.text}
                                            theme={theme}
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
                </div>
                {showDetails && <Modal closeHandle={closeDetails} data={details} />}
                <Footer />
            </div>
            {/* <footer/>  */}
        </React.Fragment>
    )
}

