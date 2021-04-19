import React from 'react';


export default function Books(props) {
   
    return (
        <>
          <div  className="cards">
              <div className='card'>
                  
                  <img src={props.imgsrc} alt="book-image" className='book_img' />
                 
                  <div className='book_info'>
                  <h3 className='book_title'>{props.title}</h3>
                      <span className="publice">{props.status}</span><br/>
                      <a href={props.link} className="btn" target="_blank">
                          <button style={{color:"green" ,width:"50px"}}>Details</button>
                      </a>
                  </div>
              </div>
          </div> 
        </>
    )
}
