export const API_ENDPONIT = {
    MOVIES_MANAGER: {
        GET_MOVIES_DATE: `/QuanLyPhim/LayDanhSachPhimTheoNgay`,
    },
    USER_MANAGER: {
        USER_LOGIN: `/QuanLyNguoiDung/DangNhap`,
        USER_REGISTER: `/QuanLyNguoiDung/DangKy`,
    },
    TICKET_MANAGER: {
        GET_TICKETS_USER: `/QuanLyNguoiDung/ThongTinTaiKhoan`,
        GET_TICKETS_CINEMA: `/QuanLyDatVe/LayDanhSachPhongVe`,
        POST_TICKETS_MOVIE: `/QuanLyDatVe/DatVe`,
    },
    SHOWTIMES_MANAGER: {
        GET_SHOWTIMES_CINEMA: `/QuanLyRap/LayThongTinLichChieuHeThongRap`,
        GET_SHOWTIMES_MOVIE: `QuanLyRap/LayThongTinLichChieuPhim`,
    },
};

export const {
    MOVIES_MANAGER,
    USER_MANAGER,
    TICKET_MANAGER,
    SHOWTIMES_MANAGER,
} = API_ENDPONIT;
