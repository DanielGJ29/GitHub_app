import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

import GithubUser from '../../Components/Custom/GithubUser/GithubUser';
import Loader from '../../Components/Custom/Loader/Loader';


const Follower = () => {
    //Hooks
    const {user} = useParams();

    const [followers, setFollowers] = useState([]);
    
    useEffect(()=>{
        const handleFollowers = async ()=>{
        setFollowers([]);
        const response = await fetch(`https://api.github.com/users/${user}/followers`);
        const result = await response.json();
        console.log(result);
        setFollowers(result);
        }
        handleFollowers();
    },[user]);
    return (
        <div>
            <h2 className="text-center text-3xl font-bold">Followers</h2>
            { followers ? (
                followers?.map(user =>(
                    <GithubUser
                    name_login={user.login}
                    avatar={user.avatar_url}
                    github={user.html_url}
                    key={user.id}
                    />
                ))
            ): <Loader/>
            }
        </div>
    );
};

export default Follower;