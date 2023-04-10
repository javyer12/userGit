import React, { useState, useEffect } from 'react'

import Search from './Search/Search';
import UserDetails from './UserDetails/UserDetails';

import gettingUser from '../services/FetchUser.service';


const SUCCESS = (
    <div className="bg-success alert alert-success" role="alert">
        Request Successful!!.
    </div>
);
const ERROR = (
    <div className="bg-danger alert alert-danger" role="alert">
        !!sUser not found, the user does not exist or there was some error!!
    </div>
)
function Clean(trash, message) {
    return setTimeout(() => {
        trash(message)
    }, 3000)
}

export default function GithubUser() {
    const [ inputUser, setInputUser ] = useState('octocat');
    const [ userGithub, setUserGithub ] = useState('');
    const [ notificationMessage, setNotificationMessage ] = useState('');

    const user = {
        avatarUrl: userGithub.avatar_url,
        userBio: userGithub.bio,
        userGit: userGithub.login,
        userDate: userGithub.created_at,
        userName: userGithub.name,
        userRepos: userGithub.public_repos,
        userFollowers: userGithub.followers,
        userFollowings: userGithub.following,
        userReposLink: userGithub.repos_url,
        userGithub: userGithub.html_url,
        userTwitter: userGithub.twitter_username,
        userLocation: userGithub.location,
    }
    useEffect(() => {
        async function getUserGithub() {
            try {
                const rta = await gettingUser(inputUser);
                if (inputUser === "octocat") {
                    localStorage.setItem("octocat", JSON.stringify(rta));
                }
                else if (rta.message === "Not Found") {
                    const octocat = JSON.parse(localStorage.getItem("octocat"));
                    setNotificationMessage(ERROR)
                    Clean(setNotificationMessage, '')
                    return setUserGithub(octocat);
                } else {
                    setNotificationMessage(SUCCESS)
                    Clean(setNotificationMessage, '')
                }
                return setUserGithub(rta);
            } catch (e) {
                setNotificationMessage(ERROR)
                Clean(setNotificationMessage, '')
                throw new Error(`Could not get user Github`);
            }
        }
        getUserGithub();
    }, [ inputUser ])


    return (
        <div className='rounded-4 shadow p-5'>
            {notificationMessage}
            <Search inputUser={inputUser} setInputUser={setInputUser} />
            <UserDetails data={user} />
        </div>
    )
}
