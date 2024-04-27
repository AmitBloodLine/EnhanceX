import React from 'react'
import AdminDashboard from './dashboard/page'
import AdminNavbar from './navbar'


const Layout = ({ children }) => {
    return (
        <>
           <AdminDashboard/>
           <AdminNavbar/>
            {children}
        </>
    )
}

export default Layout;