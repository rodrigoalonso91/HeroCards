import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../Auth';
import { HeroRoutes } from '../Heroes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path='login' element={
                    <PublicRoutes>
                        <LoginPage />
                    </PublicRoutes>
                } />

                <Route path='/*' element={ 
                    <PrivateRoutes>
                        <HeroRoutes />
                    </PrivateRoutes>
                 } />

            </Routes>
        </>
    )
}
