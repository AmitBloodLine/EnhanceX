import React from 'react'
import AdminSidebar from './AdminSidebar';


const Layout = ({ children }) => {
    return (
        <>
           <AdminSidebar/>
            {children}
        </>
    )
}

export default Layout;