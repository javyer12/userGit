import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';

export default function Search({ setInputUser }) {
    const [ valueInput, setValueInput ] = useState(" ")
    const onSearchValue = (e) => {
        let inputValue;
        inputValue = e.target.value;
        setValueInput(inputValue);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputUser(valueInput);
        setValueInput("")
    }

    return (
        <div>
            <div className="input-group mb-1 form-floating ">
                <input
                    onChange={onSearchValue}
                    type="text"
                    value={valueInput}
                    className="form-control"
                    placeholder="Type Github User"
                    id="githubUser" aria-label="Type Github User"
                    aria-describedby="button-addon2" />
                <label className=" text-black" htmlFor="githubUser">Type the Github Username</label>
                <button
                    onClick={handleSubmit}
                    className="btn btn-outline-secondary border-1 border-light-subtle"
                    type="button"
                    id="button-addon2"><BsSearch />
                </button>
            </div>
        </div>
    )
}
