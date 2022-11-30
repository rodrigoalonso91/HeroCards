import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../ui/components';
import { LoginPage } from '../Auth/Pages';
import { MarvelPage, DcPage } from '../Heroes/pages';

export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='marvel' element={ <MarvelPage /> } />
                <Route path='dc' element={ <DcPage />} />
                <Route path='login' element={ <LoginPage /> } />
                <Route path='/' element={ <Navigate to="/marvel" /> } />
            </Routes>
        </>
    )
}
