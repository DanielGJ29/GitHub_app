import React, { useEffect, useState } from 'react';
import { Link,useHistory } from 'react-router-dom';

import Form from '../../Components/Home/Form/Form';
import GithubUser from '../../Components/Custom/GithubUser/GithubUser';
import Loader from '../../Components/Custom/Loader/Loader';


const Home = () => {

    const history = useHistory();

    const [name, setName] = useState(null);
    const [dataGithub, setDataGithub] = useState(null);
    const [loader, setLoader] = useState(false);
    const [myAvatar, setMyAvatar]= useState(null);

    const handleChangeSearch = ({value})=>{
        setName(value);
    }
    const handleSearch = async (e)=>{
        e.preventDefault();
        setDataGithub(null);
        //console.log("reseeteo datagithub");
        history.push("/");
        setLoader(true);
        const url =`https://api.github.com/users/${name}`;
        const response = await fetch(url);
        const result = await response.json();
        setDataGithub(result);
        setLoader(false);
    }
    const handleClick =()=>{
        setDataGithub(null);
        const inputSearch = document.getElementById("input-search");
        inputSearch.value = "";
    }

    useEffect(()=>{
        const handleMyGithub =async ()=>{
            const url =`https://api.github.com/users/danielgj29`;
            const response = await fetch(url);
            const result = await response.json();
            setMyAvatar(result);
        }
        handleMyGithub();
    },[]);

    return (
        <>
        <div className="flex justify-between items-center bg-black h-20">
            <div onClick={handleClick} className="text-white text-lg text-center md:w-40">
                <Link to="/"> 
                <h1 className="text-xs md:text-base ml-4">Github Api</h1>
                <p className="text-xs  md:text-base">Home</p>
                </Link>
            </div>
            <div><Form
                handleSearch ={handleSearch}
                handleChangeSearch={handleChangeSearch}/>
            </div>
            <div className=" md:visible md:w-50 text-white mr-4 text-center  flex flex-col justify-center items-center">
                { <img className="w-1 md:w-12 rounded-full" src={myAvatar?.avatar_url} alt="" />}
                {<p className="hidden text-xs md:text-base md:block md:w-full">{myAvatar?.name}</p>}
            </div> 
        </div>

        <div className="text-center">
        {dataGithub? <GithubUser
        name={dataGithub?.name}
        name_login={dataGithub?.login}
        bio={dataGithub?.bio}
        avatar={dataGithub?.avatar_url}
        github={dataGithub?.html_url}
        public_repos={dataGithub?.public_repos}
        follower={dataGithub?.followers}
        following={dataGithub?.following}
        handleClick={handleClick}/> : null}

        </div>
        {loader && <Loader/>}
        </>
    );
};

export default Home;