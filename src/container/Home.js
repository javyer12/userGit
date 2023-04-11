import React, { Fragment } from 'react'
import { useDarkMode } from '../hooks/useDarkMode';
import GithubUser from '../components/GithubUser';
import '../css/dark.css';

export default function Home() {
    const [ theme, toggleTheme ] = useDarkMode();
    return (
        <Fragment>
            <div className='userDetails shadow-lg rounded-2 m-5 p-5'>
                <div className="d-flex justify-content-end form-check form-switch mt-0 m-2">
                    <input
                        onClick={toggleTheme}
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />
                    <label
                        className="ms-2 text-start form-check-label"
                        htmlFor="flexSwitchCheckDefault">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'} </label>
                </div>
                <GithubUser />
            </div>
        </Fragment>
    )
}