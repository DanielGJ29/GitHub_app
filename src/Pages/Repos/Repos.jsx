import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loader from '../../Components/Custom/Loader/Loader';


const Repos = () => {
    const {name} = useParams();
    const [repos, setRepos] = useState([]);
    
    useEffect(()=>{
        const handleRepos = async ()=>{
         const response = await fetch(`https://api.github.com/users/${name}/repos`);
         const result = await response.json();
         console.log("repos",result);
         setRepos(result);
        }
        handleRepos();
    },[]);
    return (
        <>
        
        <div className="flex justify-center">
            <p className="text-center mt-5 font-bold text-2xl text-blue">{name}</p>
            <img className="w-10 md:w-1/12 ml-8 mt-1 rounded-full" src={repos[0]?.owner.avatar_url} alt="" />
        </div>
        <div className="w-11/12 mx-auto grid md:grid-cols-3 gap-10 "> 
            {
               repos ? repos.map( (singleRepos, key) =>(
                    <>
                    <div className="mt-10 border-0 rounded-lg flex flex-col justify-between bg-gray p-4">
                        <div className="flex justify-between">
                            <p className="text-base font-bold text-blue">{singleRepos?.name}</p>
                            <p>{singleRepos.visibility}</p>
                        </div>    
                        <p className="mt-5 mb-5">{singleRepos?.description}</p>
                        <div className="flex flex-row-reverse justify-between pb-0">
                            <button className=" w-20 h-7 rounded-full text-white bg-black text-sm"><Link to={{pathname:singleRepos?.html_url}} target="_blank">See</Link></button>
                            <p className="text-base">{singleRepos?.language} </p>
                        </div>
                        
                        
                    </div>
                    </>
                )) : <Loader/>
            }       
        </div>
        
        </>
    );
};

export default Repos;