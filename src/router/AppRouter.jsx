import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Auth';
import { HeroRoutes } from '../Heroes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />
                <Route path='/*' element={ <HeroRoutes /> } />
            </Routes>
        </>
    )
}
