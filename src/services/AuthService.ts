import client from "../utils/http";
import { IUser } from "../types/Auth";
import cookie from 'cookie'

export class AuthService {
    static login(creds: IUser) {
        return client.post('/login', creds)
    }

    static signUp(creds: IUser) {
        return client.post('/sign-up', creds)
    }
}

export const login = async (creds: IUser): Promise<IUser> => await client.post('/login', creds)

export const getSession = () => {
    const { spa_token } = cookie.parse(document.cookie);
    return spa_token;
}