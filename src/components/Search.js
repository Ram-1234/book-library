import React from 'react'

export default function Search() {
    return (
        <>
        <div className='search'>
            <input type="text" placeholder="Search..." />
            <button type='submit'><i className="fa fa-search"></i>search</button>
        </div>
        </>
    )
}
