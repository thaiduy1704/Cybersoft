import Axios from "axios";
import { API, TOKEN, TOKEN_CYBERSOFT } from "../utils/Settings/config";

export class baseService {
  //put json về phía backend
  put = (url, model) => {
    return Axios({
      url: `${API}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${API}/${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${API}/${url}`,
      method: "GET",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };

  delete = (url) => {
    return Axios({
      url: `${API}/${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}
