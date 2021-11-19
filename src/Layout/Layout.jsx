import React from 'react';
import Loader from '../Components/Custom/Loader/Loader';
import Home from '../Pages/Home/Home';

const Layout = ({children}) => {
    return (
        <div>
            <Loader/>
            <Home/>
            {children}
        </div>
    );
};

export default Layout;