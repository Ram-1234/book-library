import React from 'react';
import './style.css';

export default function Bookcatagory() {
    return (
        <>
        <div className="bookcategory">
            <select className="category">
                <option>Computer Scince</option>
                <option>Story</option>
                <option>Historical</option>
                <option>Geographic</option>
                <option>Technology</option>
            </select>
        </div>
        </>
    )
}
