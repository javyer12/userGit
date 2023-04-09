import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

export default function Search({ setInputUser }) {
    const [ valueInput, setValueInput ] = useState(" ")
    const onSearchValue = (e) => {
        const inputValue = e.target.value;
        setValueInput(inputValue);
    }
    const handleSubmit = () => {
        setInputUser(valueInput);
    }

    return (
        <div>
            <div className="input-group mb-1 form-floating ">
                <input onChange={onSearchValue} type="text" className="form-control" placeholder="Type Github User" aria-label="Type Github User" aria-describedby="button-addon2" />
                <button onClick={handleSubmit} className="btn btn-outline-secondary border-1 border-light-subtle" type="button" id="button-addon2"><BsSearch /></button>
            </div>
        </div>
    )
}
