import axios from 'axios';
import authHeader from './auth-header';

require("dotenv").config();

const API_URL = process.env.REACT_APP_BASE_URL_API;

class AlternatifService {
  getAlternatif() {
    return axios.get(API_URL + `/proyek/alternatif/data`, {headers:authHeader()});
  }

  getAlternatifByNim(nim){
    return axios.get(API_URL + `/proyek/alternatif/data/${nim}`,{headers:authHeader()})
  }

  postAlternatif(
    _id,
    nama_mahasiswa,
    alamat,
    jenis_kelamin,
    subkriteria_id
  ){
    return axios
    .post(API_URL + `/proyek/alternatif/data`,{
      _id,
      nama_mahasiswa,
      alamat,
      jenis_kelamin,
      subkriteria_id
    },{headers:authHeader()})
    .then(response => {
      console.log(response);
      return response
    })
  }
}
export default new AlternatifService();
