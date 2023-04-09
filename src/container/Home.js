import React, { Fragment } from 'react'
import { useDarkMode } from '../hooks/useDarkMode';
import GithubUser from '../components/GithubUser';
import '../dark.css';

export default function Home() {
    const [ theme, toggleTheme ] = useDarkMode();
    if (theme === 'dark') {
        document.body.classList.add('userLinks');
        document.body.classList.remove('userLinksDark');
    } else {
        document.body.classList.add('userLinksDark');
    }
    console.log(theme)
    return (
        <Fragment>
            <div className='userDetails shadow-lg rounded-2 m-5 p-5'>
                <div class="d-flex justify-content-end form-check form-switch m-2">
                    <input onClick={toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="ms-2 text-start form-check-label" for="flexSwitchCheckDefault">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'} </label>
                </div>
                {/* <button onClick={toggleTheme}>Cambiar tema</button> */}
                <GithubUser />
            </div>
        </Fragment>
    )
}
/* 
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div> */