import Axios from "axios";
import {
    DOMAIN_CYBER,
    API_TOKEN,
    TOKEN_CYBER,
} from "../constants/baseSettings";

export class BaseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBER}/api/${url}`,
            method: "PUT",
            data: model,
            // headers: {
            //     'Authorization': 'Bearer ',
            //     'TokenCybersoft': API_TOKEN
            // }
        });
    };

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN_CYBER}/api/${url}`,
            method: "POST",
            data: model,
            // headers: {
            //     Authorization:
            //         "Bearer " + JSON.parse(localStorage.getItem(TOKEN_CYBER)),
            //     TokenCybersoft: API_TOKEN,
            // },
        });
    };

    get = (url) => {
        return Axios({
            url: `${DOMAIN_CYBER}/api/${url}`,
            method: "GET",
            headers: {
                Authorization: "Bearer ",
                TokenCybersoft: API_TOKEN,
            },
        });
    };

    delete = (url) => {
        return Axios({
            url: `${DOMAIN_CYBER}/api/${url}`,
            method: "DELETE",
            // headers: {
            //     'Authorization': 'Bearer ',
            //     'TokenCybersoft': API_TOKEN
            // }
        });
    };
}
