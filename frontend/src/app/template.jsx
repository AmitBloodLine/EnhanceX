'use client';
import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import Navbar from '@/components/navbar';

const Template = ({ children }) => {

    useEffect(() => {
    }, [])

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={1000}>
            <Navbar/>
            {children}
        </SnackbarProvider>
    )
}

export default Template;