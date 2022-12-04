import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Auth';
import { HeroRoutes } from '../Heroes';
import { PrivateRoutes } from './PrivateRoutes';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={ <LoginPage /> } />

                <Route path='/*' element={ 
                    <PrivateRoutes>
                        <HeroRoutes />
                    </PrivateRoutes>
                 } />

            </Routes>
        </>
    )
}
