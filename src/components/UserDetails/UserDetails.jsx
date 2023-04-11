import React from 'react';

import { GrLocation } from 'react-icons/gr';
import { BiCodeCurly } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';


export default function UserDetails(data) {
    const {
        avatarUrl,
        userBio,
        userGit,
        userDate,
        userName,
        userRepos,
        userFollowers,
        userFollowings,
        userReposLink,
        userGithub,
        userTwitter,
        userLocation } = data.data;

    return (
        <div className=' contianer mt-4 m-2'>
            <div className='row githubUserDetails'>
                <div className='col-4 githubUserImg'>
                    <img className="rounded-circle img-fluid"
                        src={avatarUrl}
                        alt="github user" />
                </div>

                <div className='col-8 githubUserDescription'>
                    {/* date  */}
                    <div className='githubUserDate d-flex justify-content-between'>
                        <p>{userGit}</p>
                        <small>Created at:  {userDate}</small>
                    </div>

                    {/* User name */}
                    <div className='githubUserNames'>
                        <h3 className='text-start mt-3'>{userName}</h3>
                        <p className='text-start mt-3'>{userBio}</p>
                    </div>
                    {/* repos,followers, following */}
                    <div className='d-flex justify-content-around rounded-3 bg-white p-2 shadow'>
                        <div>
                            <h5 className='text-black'>Repos</h5>
                            <p className='text-black'>{userRepos}</p>
                        </div>
                        <div>
                            <h5 className='text-black'>Followers</h5>
                            <p className='text-black'>{userFollowers}</p>
                        </div>
                        <div>
                            <h5 className='text-black'>Followings</h5>
                            <p className='text-black'>{userFollowings}</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div className='mt-5'>
                        <div className='mt-3 d-flex justify-content-between'>
                            <div className='d-flex flex-row '
                            ><p><RiGitRepositoryCommitsFill /> </p>
                                { } {userReposLink === null || '' ? <p>No Repos in this Account</p> : <a className=' text-decoration-none' rel="noreferrer" target="_blank" href={userReposLink}>Links to Repos</a>}
                            </div>
                            <div>
                                <BiCodeCurly />
                                { } {userGithub === null || '' ? <p>User not found or Profile Private</p> : <a className=' text-decoration-none' rel="noreferrer" target="_blank" href={userGithub}>Profile</a>}
                            </div>
                        </div>
                        <div className='mt-3 d-flex justify-content-between'>
                            <div>
                                <BsTwitter />
                                { } {userTwitter === null || '' ? <p>No Twitter Account </p> : <a className='text-decoration-none ' target="_blank" rel="noreferrer" href={`https://twitter.com/${userTwitter}`}>{userTwitter}</a>}
                            </div>
                            <div>
                                <GrLocation className='' />
                                { } {userLocation === null ? <p> No Location</p> : <a className='text-decoration-none' href='/'>{userLocation} </a>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// api de repos para el portafolio
// https://api.github.com/users/javyer12/repos