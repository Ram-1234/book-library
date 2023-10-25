import React from 'react';
import "./style.css"

export default function Books(props) {

    return (
        <>
            <div className="cards">
                <div className='card'  style={{border: props?.theme?.border}}>
                    <div style={{ color: "red" }} className="rating">{props.rates * 2 * 10}%</div>
                    <img src={props.imgsrc} alt="bookimage" className='book_img' />
                    <div style={{ color: "red" }} className="bookstatus">{props.bstatus}</div>
                    <div className='book_info'>
                        <h3 className='book_title'>{props.title}</h3>
                        <span className="publice">{props.status}</span><br />
                        <button className='details__button' onClick={() => props.showBookHandler(props)}>Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}
