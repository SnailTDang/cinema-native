import { BaseService } from "./BaseServices";
import queryString from "query-string";

export class MoviesManager extends BaseService {
    getListBanners = (maNhom) => {
        // const url = queryString.stringifyUrl({
        //     url: `${postalCodeEndpoint}/get-init`,
        //     query: { ...params },
        // });
        return this.get(
            `api/QuanLyPhim/LayDanhSachPhimTheoNgay?maNhom=${maNhom}`
        );
    };
    getListMovies = (maNhom) => {
        return this.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`);
    };
}

export const moviesManager = new MoviesManager();
