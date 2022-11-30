import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../ui/components/Navbar'
import { LoginPage } from '../Auth/Pages/LoginPage'
import { DcPage } from '../Heroes/Pages/DcPage'
import { MarvelPage } from '../Heroes/Pages/MarvelPage'

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
