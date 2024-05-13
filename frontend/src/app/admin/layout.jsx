import React from 'react'
import AdminSidebar from './AdminSidebar';


const Layout = ({ children }) => {
    return (
        <>

            <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-2">
                <div className="row-span 2">
                    <AdminSidebar />

                </div>
                <div className="row-span-4">

                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;