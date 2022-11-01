import { GET_LIST_MOVIE } from "../constants";

const initialState = {
  arrListMovie: [
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2021-04-06T07:07:38.223",
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
    {
      maPhim: 1338,
      tenPhim: "Fight for my way",
      biDanh: "fight-for-my-way",
      trailer: "https://www.youtube.com/embed/9l5KoxFqQZY",
      hinhAnh:
        "https://movienew.cybersoft.edu.vn/hinhanh/fight-for-my-way_gp10.jpg",
      moTa: "The story is about underdogs with big dreams and third-rate specs struggling to survive, and craving for success with a career they're underqualified for. A long time friendship is blossoming into romance between two immature friends Ko Dong-man (Park Seo-joon) and Choi Ae-ra (Kim Ji-won) whose childish dynamic hasn't changed despite reaching adulthood",
      maNhom: "GP10",
      ngayKhoiChieu: "2021-04-06T07:07:38.223",
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
};

export const ListMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIE: {
      state.arrListMovie = action.arrListMovie;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
