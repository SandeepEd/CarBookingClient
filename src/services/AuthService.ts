import client from "../utils/http";
import { IUser } from "../types/Auth";

export class AuthService {
    static login(creds: IUser) {
        return client.post('/login', creds)
    }
}

export const login = async (creds: IUser): Promise<IUser> => await client.post('/login', creds)