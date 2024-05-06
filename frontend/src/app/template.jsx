'use client';
import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
// import Navbar from '@/components/navbar';
import PrelineScript from '@/components/PrelineScript';
import { UserProvider } from '@/context/UserContext';

const Template = ({ children }) => {

    useEffect(() => {
    }, [])

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={1000}>
            <UserProvider>
                {/* <Navbar /> */}
                <PrelineScript />
                {children}
            </UserProvider>

        </SnackbarProvider>
    );
};

export default Template;