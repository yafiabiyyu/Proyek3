import React from 'react'
import {Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import KriteriaService from '../../service/kriteria.service';
import AlternatifService from '../../service/alternatif.service';

export default class AlternatifForm extends React.Component {
  constructor(props){
    super(props)
    this.addSubkriteria = this.addSubkriteria.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.state = {
      _id : "",
      nama_mahasiswa : "",
      alamat : "",
      jenis_kelamin : "",
      subkriteria_id : [],
      pendapatan:[],
      tanggungan:[],
      status_orangtua:[],
      semester:[],
      ipk:[]
    };
  }
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
    console.log(value);
  }

  handleSaveData(e){
    e.preventDefault();
    AlternatifService.postAlternatif(
      this.state._id,
      this.state.nama_mahasiswa,
      this.state.alamat,
      this.state.jenis_kelamin,
      this.state.subkriteria_id
    ).then(
      () => {
        this.props.history.push("/alternatif")
        window.location.reload();
      }
    )
  }

  addSubkriteria(evt){
    let subkriteria_id = this.state.subkriteria_id;
    subkriteria_id.push(evt.target.value)
    this.setState({
      subkriteria_id:subkriteria_id
    });
    // subId.push(evt.target.value)
    console.log(this.state.subkriteria_id);
  }
  componentDidMount() {
    KriteriaService.getSubkriteria("aead631b").then(
      response => {
        this.setState({
          pendapatan:response.data.data
        });
        // console.log(response.data.data);
      },
      error => {
        console.log(error);
      }
    );
    KriteriaService.getSubkriteria("f7af3e9d").then(
      response => {
        this.setState({
          tanggungan:response.data.data
        });
        // console.log(response.data.data);
      },
      error => {
        console.log(error);
      }
    );
    KriteriaService.getSubkriteria("31fb93b3").then(
      response => {
        this.setState({
          status_orangtua:response.data.data
        });
        // console.log(response.data.data);
      }
    );
    KriteriaService.getSubkriteria("39efecd7").then(
      response => {
        this.setState({
          semester:response.data.data
        });
        console.log(response.data.data);
      }
    );
    KriteriaService.getSubkriteria("8efd3a94").then(
      response => {
        this.setState({
          ipk:response.data.data
        });
      }
    )
  }
  render(){
    return(
      <CCard>
        <CCardHeader>
          Tambah data alternatif
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormGroup>
              <CLabel htmlFor="_id">NIM Mahasiswa</CLabel>
              <CInput type="text" id="_id" value={this.state._id} onChange={this.handleChange} name="_id" placeholder="Masukan NIM mahasiswa"/>
              <CFormText className="help-block">Masukan NIM mahasiswa</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nama_mahasiswa">Nama Mahasiswa</CLabel>
              <CInput type="text" id="nama_mahasiswa" onChange={this.handleChange} name="nama_mahasiswa" placeholder="Masukan nama mahasiswa"/>
              <CFormText className="help-block">Masukan nama mahasiswa</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="alamat">Alamat</CLabel>
              <CInput type="text" id="alamat" onChange={this.handleChange} name="alamat" placeholder="Masukan alamat"/>
              <CFormText className="help-block">Masukan alamat</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jenis Kelamin</CLabel>
              <CSelect custom name ="jenis_kelamin" onChange={this.handleChange} id="jenis_kelamin">
                  <option value="">Please Select</option>
                  <option value="Laki">Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jumlah Pendapatan Orangtua</CLabel>
              <CSelect custom name ="pendapatan_orangtua" onChange={this.addSubkriteria} id="pendapatan_orangtua">
                  <option value="">Please Select</option>
                  {this.state.pendapatan.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jumlah Tanggungan Orangtua</CLabel>
              <CSelect custom name ="pendapatan_orangtua" onChange={this.addSubkriteria} id="pendapatan_orangtua">
                  <option value="">Please Select</option>
                  {this.state.tanggungan.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Status Orangtua</CLabel>
              <CSelect custom name ="status_orangtua" onChange={this.addSubkriteria} id="status_orangtua">
                  <option value="">Please Select</option>
                  {this.state.status_orangtua.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Semester</CLabel>
              <CSelect custom name ="semester" onChange={this.addSubkriteria} id="semester">
                  <option value="">Please Select</option>
                  {this.state.semester.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">IPK</CLabel>
              <CSelect custom name ="ipk" onChange={this.addSubkriteria} id="ipk">
                  <option value="">Please Select</option>
                  {this.state.ipk.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" onClick={this.handleSaveData} color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
          <Link to="/alternatif">
          <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
          </Link>
        </CCardFooter>
      </CCard>
    )
  }
}
