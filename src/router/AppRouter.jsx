import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui';
import { LoginPage } from '../Auth';

export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
            </Routes>
        </>
    )
}
