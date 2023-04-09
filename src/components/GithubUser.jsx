import React, { useState, useEffect } from 'react'

import Search from './Search/Search';
import UserDetails from './UserDetails/UserDetails';

import gettingUser from '../services/FetchUser.service';


export default function GithubUser() {
    const [ inputUser, setInputUser ] = useState("octocat");
    const [ userGithub, setUserGithub ] = useState('');
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
                if (rta.message === "Not Found") {
                    const octocat = JSON.parse(localStorage.getItem("octocat"));
                    return setUserGithub(octocat);
                }
                return setUserGithub(rta);
            } catch (e) {
                throw new Error(`Could not get user Github`);
            }
        }
        getUserGithub();
    }, [ inputUser ])


    return (
        <div className='bg-transparent rounded-4 shadow p-5'>
            <Search inputUser={inputUser} setInputUser={setInputUser} />
            <UserDetails data={user} />
        </div>
    )
}
