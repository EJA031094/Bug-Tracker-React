import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from 'react';
import { UserModel } from '../models/UserModel';

export const UserContext = createContext<{
    user: UserModel | undefined,
    setUser: Dispatch<SetStateAction<UserModel | undefined>>
    logoutUser: Function
} | undefined>(undefined);

export function useUserContext() {
    return useContext(UserContext);
}

export function UserProvider({children}: {children: ReactElement}) {
    const [user, setUser] = useState<UserModel | undefined>(undefined);
    const logoutUser = () => {
        setUser(undefined);
        console.log('logged out baby');
    
        //delete session cookies
    }

    const value = { user, setUser, logoutUser }

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}