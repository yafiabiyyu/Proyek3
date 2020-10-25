import axios from "axios";

require("dotenv").config();

const API_URL = process.env.REACT_APP_BASE_URL_API;

class AuthService{

  login(username,password){
    console.log(API_URL);
    return axios
    .post(API_URL + '/proyek/user/login',{
      username,
      password
    })
    .then(response => {
      console.log(response);
      if(response.data.status === "berhasil"){
        localStorage.setItem("user", JSON.stringify(response.data))
      }
      return response
    })
  }
  getCurrentUser(){
    return JSON.parse(localStorage.getItem("user"));
  }

}
export default new AuthService();
