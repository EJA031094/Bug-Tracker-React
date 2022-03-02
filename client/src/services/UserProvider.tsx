import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';
import { UserModel } from '../models/UserModel';
import { ProcessLogout } from './Data';
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext<{
    user: UserModel | undefined,
    setUser: Dispatch<SetStateAction<UserModel | undefined>>
    logoutUser: Function
} | undefined>(undefined);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({children}: {children: ReactElement}) {
    const storedUser = localStorage.getItem('userData') || '';
    let userData = undefined;

    if(storedUser !== '') {
        userData = JSON.parse(storedUser);
    }

    const [user, setUser] = useState<UserModel | undefined>(userData);
    const navigate = useNavigate();

    const logoutUser = async () => {
        setUser(undefined);
    
        const response = await ProcessLogout();
        localStorage.removeItem('userData');

        if(response.ok) {
            navigate('/');
        }
    }

    const value = { user, setUser, logoutUser }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}