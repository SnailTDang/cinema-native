import { USER_MANAGER } from "../config/api/apiEndPoint";
import { BaseService } from "./BaseServices";

export class UserServices extends BaseService {
    postUserLogin = (user) => {
        return this.post(USER_MANAGER.USER_LOGIN, user);
    };

    postUserSignIn = (user) => {
        return this.post(USER_MANAGER.USER_REGISTER, user);
    };

    checkTicketsUser = (user) => {
        return this.post(USER_MANAGER.GET_TICKETS_USER, user);
    };
}

export const userServices = new UserServices();
