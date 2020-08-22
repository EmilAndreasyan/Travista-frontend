import React, {useState} from 'react';

const Search = ({getQuery}) => {

    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
       <section className="search">
           <input type="text" placeholder="search" className="form-control" value={text} onChange={(event) => onChange(event.target.value) }
           autoFocus/>
       </section>
        )
}

export default Search;

