import client from "../utils/http";
import { IUser } from "../types/Auth";

export class UserService {
    static getUser() {
        return client.get<IUser>('/user/me');
    }
}