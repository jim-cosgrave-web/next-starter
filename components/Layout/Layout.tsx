import React from 'react';
import Header from './Header';
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
    const router = useRouter();

    function getHeader() {
        if (router.pathname === '/login') {
            return null;
        } else {
            return <Header />;
        }
    }

    return (
        <div>
            {getHeader()}
            {children}
        </div>
    );
};

export default Layout;