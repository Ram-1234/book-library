import React,{useState} from 'react';
import './style.css';

export default function Bookcatagory(props) {
    const [optvalue,setValue]=useState("")

     //console.log(optvalue)
     const selectOption=(e)=>{
         setValue(e.target.value)
         //console.log(e.target.value)
     }

    return (
        <>
        <div   className="bookcategory">
            <select   onChange={()=>props.onSubmit(props.optvalue)} className="category" onChange={selectOption} defaultValu={optvalue}>
                <option value="computer">Computer</option>
                <option value="story">Story</option>
                <option value="travel">Travel</option>
                <option value="heaven">Heaven</option>
                <option value="horror">Horror</option>
                <option value="faith">Faith</option>
                <option value="fantasy">Fantasy</option>
                <option value="nature">Nature</option>
                <option value="culture">Culture</option>
                <option value="romantic">Romantic</option>
            </select>
        </div>
        </>
    )
}
