import React, { useState } from 'react';
import '../styles/style.css';
import "./style.css";

export default function Bookcatagory(props) {
    const [optvalue] = useState("");


    return (
        <React.Fragment>
            <div className="bookcategory">
                <select onChange={(e) => props.defaultType(e)} className="category" defaultValue={optvalue}>
                    <option value="all">All</option>
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
        </React.Fragment>
    )
}
