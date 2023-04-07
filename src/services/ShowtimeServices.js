import queryString from "query-string";
import { SHOWTIMES_MANAGER } from "../config/api/apiEndPoint";
import { BaseService } from "./BaseServices";

export class ShowtimeServices extends BaseService {
    getCinemaShowtimeMovie = (params) => {
        const url = queryString.stringifyUrl({
            url: `${SHOWTIMES_MANAGER.GET_SHOWTIMES_CINEMA}`,
            query: { ...params },
        });
        return this.get(url);
    };
    getDetailShowtimeMovie = (params) => {
        const url = queryString.stringifyUrl({
            url: `${SHOWTIMES_MANAGER.GET_SHOWTIMES_MOVIE}`,
            query: { ...params },
        });
        return this.get(url);
    };
}

export const showtimeServices = new ShowtimeServices();
