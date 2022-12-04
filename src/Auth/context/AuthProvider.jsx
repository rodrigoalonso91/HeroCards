import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";

export const AuthProvider = ({ children }) => {

    cosnt [ authState, dispath ] = useReducer( authReducer, {logged: false} );

    return (
        <AuthContext.Provider value={{ }}>
            { children }
        </AuthContext.Provider>
    )
}