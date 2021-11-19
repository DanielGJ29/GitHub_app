import React from 'react';
import Home from '../Pages/Home/Home';

const Layout = ({children}) => {
    return (
        <div>
            <Home/>
            {children}
        </div>
    );
};

export default Layout;