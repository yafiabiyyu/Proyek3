import axios from 'axios';
import authHeader from './auth-header';

require("dotenv").config();

const API_URL = process.env.REACT_APP_BASE_URL_API;

class HasilService {
  getKonversi() {
    return axios.get(API_URL + `/proyek/hasil/data/konversi`, {headers:authHeader()});
  }

  getNormalisasi() {
    return axios.get(API_URL + `/proyek/hasil/data/normalisasi`, {headers:authHeader()});
  }

  getHasilSaw() {
    return axios.get(API_URL + `/proyek/hasil/data/hasil/saw`, {headers:authHeader()});
  }

  getHasilMsaw() {
    return axios.get(API_URL + `/proyek/hasil/data/hasil/msaw`, {headers:authHeader()});
  }
}

export default new HasilService();
