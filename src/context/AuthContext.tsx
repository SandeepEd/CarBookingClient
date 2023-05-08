import { ReactNode, createContext, useCallback, useContext, useState } from "react";
import { login } from "../services/AuthService";
import { IUser } from "../types/Auth";
import { useNavigate } from "react-router-dom";
import Loading from "../reusable/Loading";

interface IAuthContext {
    user: IUser | undefined;
    logIn: (creds: IUser) => void;
    logout: () => void;
}
const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [user, setUser] = useState<IUser | undefined>(undefined)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate();

    const logIn = useCallback(async (creds: IUser) => {
        console.log(`creds from useCallBack:::`, creds)
        setIsLoading(true)
        const user = await login(creds)
        console.log(`data :::`, user)
        if (user) {
            setUser(user)
        }
        setIsLoading(false)
    }, [])

    const logout = useCallback(() => {
        setUser(undefined)
        navigate('/login')
    }, [])

    if (isLoading) {
        return <Loading />
    }

    return <AuthContext.Provider value={{ logIn, user, logout }}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context
}