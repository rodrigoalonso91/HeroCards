import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../Auth"

export const PublicRoutes = ({ children }) => {

    const { logged } = useContext( AuthContext );

    return (logged)
        ? <Navigate to="/marvel"/>
        : children
}
    