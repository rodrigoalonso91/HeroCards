import { Navbar } from '../../ui'

export const HeroRoutes = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='marvel' element={ <MarvelPage /> } />
                <Route path='dc' element={ <DcPage />} />
                <Route path='/' element={ <Navigate to="/marvel" /> } />
            </Routes>
        </>
        
    )
}
