import { MOVIES_MANAGER } from "../config/api/apiEndPoint";
import { BaseService } from "./BaseServices";
import queryString from "query-string";

export class MoviesManager extends BaseService {
    getListMovies = (params) => {
        const url = queryString.stringifyUrl({
            url: `${MOVIES_MANAGER.GET_MOVIES_DATE}`,
            query: { ...params },
        });
        return this.get(url);
    };
}

export const moviesManager = new MoviesManager();
