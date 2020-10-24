import axios from "axios";

require("dotenv").config();

const API_URL = 'https://48dad58ee83d.ngrok.io/api/v1';

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
