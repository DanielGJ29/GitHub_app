import React from 'react';
//import { useHistory } from 'react-router-dom';

import "./FormStyle.css";

const Form = ({handleSearch, handleChangeSearch}) => {
    // const {history} = useHistory();
    // const handleSearch =(e)=>{
    //     e.preventDefault();
    //     console.log(history);
    //     history.push("/")
    // }
    return (
        <form action="" onSubmit={(e)=>handleSearch(e)}>
            <input id="input-search" className="search-input w-40 md:w-80 h-8  text-center rounded-lg ml-6 md:ml-0" 
                    type="text" placeholder="Search City"
                    onChange={({target})=>handleChangeSearch(target)}
            />
            <span className="ml-5">icon</span>
            {/* <button type="submit">Send</button> */}
        </form>
    );
};

export default Form;