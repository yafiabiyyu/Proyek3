import axios from 'axios';
import authHeader from './auth-header';

require("dotenv").config();

const API_URL = process.env.REACT_APP_BASE_URL_API;

class KriteriaService {
  getKriteriaContent() {
    return axios.get(API_URL + `/proyek/kriteria/data`, {headers:authHeader()});
  }

  postKriteriaData(nama, atribut, bobot) {
    return axios
    .post(API_URL + `/proyek/kriteria/data`,{
      nama,
      atribut,
      bobot
    }
    ,{headers:authHeader()})
    .then(response => {
      console.log(response);
      return response
    })
  }

  getKriteriaSpesifik(kode) {
    return axios.get(API_URL + `/proyek/kriteria/data/${kode}`,{headers:authHeader()});
  }

  putKriteriaData(kode,nama, atribut, bobot) {
    return axios
    .put(API_URL + `/proyek/kriteria/data/${kode}`,{
      kode,
      nama,
      atribut,
      bobot
    },{headers:authHeader()})
    .then(response => {
      console.log(response);
      return response
    })
  }

  getSubkriteria(kode) {
    return axios.get(API_URL + `/proyek/subkriteria/data/${kode}`,{headers:authHeader()});
  }
}
export default new KriteriaService();
