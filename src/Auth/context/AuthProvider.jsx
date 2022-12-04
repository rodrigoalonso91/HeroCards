import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer";
import { types  } from "../types/types";

export const AuthProvider = ({ children }) => {

    const [ authState, dispath ] = useReducer( authReducer, {logged: false} );

    const login = ( name = '' ) => {

        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name
            }
        }

        dispath(action);
    };

    return (
        <AuthContext.Provider value={{ ...authState, login }}>
            { children }
        </AuthContext.Provider>
    )
}