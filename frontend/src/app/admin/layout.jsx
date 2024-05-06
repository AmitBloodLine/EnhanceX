import React from 'react'
import AdminDashboard from './dashboard/page'


const Layout = ({ children }) => {
    return (
        <>
           <AdminDashboard/>
            {children}
        </>
    )
}

export default Layout;