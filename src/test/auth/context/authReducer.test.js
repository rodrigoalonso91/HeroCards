import { authReducer } from "../../../Auth/context/authReducer"

describe('Test on authReducer', () => { 

    test('should return the default state', () => { 

        const initialState = useContext( authReducer );

        expect(initialState).toBe({});
    })
})