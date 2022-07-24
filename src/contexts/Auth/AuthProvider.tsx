import { useEffect, useState } from "react"
import { useApi } from "../../hooks/useApi"
import { User } from "../../models/user"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children} : { children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null)
    const api = useApi();

    useEffect(()=>{
        const validateToken = async () => {
            const storageData = localStorage.getItem('authToken');
            if(storageData) {
                const data = await api.validateToken(storageData);
                if(data) {
                    setUser(data);
                }
            }
        }
        validateToken();
    },[])

    const signin = async (username: string, password: string) => {
        const data = await api.signin(username, password);
        if (data.user && data.token){
            setUser(data.user);
            setToken(data.token);
            return true;
        }
        return false;
    }

    const signout = async() => {
        
        setUser(null);
        clearToken();
        await api.logout();
    }

    const setToken = (token: string) => {
        localStorage.setItem('authToken', token);
    }

    const clearToken = () => {
        localStorage.removeItem('authToken');
    }

    return (
        <AuthContext.Provider value={{ user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}