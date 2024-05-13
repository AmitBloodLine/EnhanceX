import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";


const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const currentuser = JSON.parse(localStorage.getItem('user'));
    const [loggedIn, setLoggedIn] = useState(currentuser !== null);

   

    const router = useRouter();

    const logout = () => {
        localStorage.removeItem('user');
        setLoggedIn(false);
        router.push('/');
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    
    
    return (
        <UserContext.Provider value={{
            loggedIn, setLoggedIn, logout
        }}>
            {children}
        </UserContext.Provider>
    )
}

const useUserContext = () => useContext(UserContext);

export default useUserContext;