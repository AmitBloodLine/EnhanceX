'use client';
import React, { useEffect } from 'react';
import { SnackbarProvider } from 'notistack';
import Navbar from '@/components/navbar';
import PrelineScript from '@/components/PrelineScript';

const Template = ({ children }) => {

    useEffect(() => {
    }, [])

    return (
        <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={1000}>
            <Navbar/>
            <PrelineScript/>
            {children}
        </SnackbarProvider>
    );
};

export default Template;