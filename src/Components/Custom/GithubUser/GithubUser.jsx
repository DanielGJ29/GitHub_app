import React from 'react';
import { Link } from 'react-router-dom';

import "./GithubUserStyle.css";
const GithubUser = (props) => {

       
    const {name,name_login,bio,avatar,github,public_repos,follower,following,handleClick}= props
    return (
        <div className=" bg-gray card-container w-10/12 md:w-1/3 m-auto mt-4 rounded">
            <div className=" header-card flex flex-col justify-between items-center">
                <img className="w-3/5 mt-5 rounded" src={avatar} alt={github} />
                <h1 className="text-xl text-blue font-bold">{name}</h1>
                <h2 className="invisible  md:visible text-xl text-black font-bold mt-3">{name_login}</h2>
                <p className="mt-5 text-black font-medium text-lg">{bio}</p>
            </div>
            <div className="text-sm md:text-base  text-black w-5/6 m-auto flex justify-between items-center mt-2">
                {name_login ? <p onClick={handleClick}><Link to={`/repos/${name_login}`}>Repos: <span className="font-bold">{public_repos}</span></Link></p> : null }
                {name_login && <p onClick={handleClick} ><Link to={`/follower/${name_login}`}> Follower: <span className="font-bold">{follower}</span> </Link></p>}
                {following ? <p>Following:<span className="font-bold">{following}</span></p> : null}
            </div>
            <div className="w-ful flex justify-center bg-black">
                <button className="w-60 mx-auto mt-5 mb-5 h-10 rounded-full bg-blue text-white"><Link to={{ pathname:github}} target="_blank">See repos</Link></button>
            </div>
        </div>
    );
};

export default GithubUser;