import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Auth/context/AuthContext';

export const Navbar = () => {

    const getClassName = (isActive) => {
        let content = `nav-item nav-link ${isActive ? 'active' : ''}`
        return content.trim();
    };

    const { user, logout} = useContext( AuthContext );

    const navigate = useNavigate();

    const onLogOut = () => {
        
        logout();
        navigate('/login', {
            replace: true
        })
    };


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2 mb-3">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Hero-App
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => getClassName(isActive) }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => getClassName(isActive) }
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => getClassName(isActive) }
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    
                    <span className='nav-item nav-link text-primary'>
                        {
                            user?.name
                        }
                    </span>

                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogOut}
                    >
                        Logout
                    </button>

                </ul>
            </div>
            
        </nav>
    )
}