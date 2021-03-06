import React, { useState } from 'react'

export const SearchInput = () => {

    const [term, setTerm] = useState('');

    const handleChange = ({target})=>{
        setTerm(target.value)
    }
    return (
        <div>
            <input type='text' name='search' value={term} onChange={handleChange}/>
        </div>
    )
}
