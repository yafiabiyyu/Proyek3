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
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handlePendapatanOrtu = this.handlePendapatanOrtu.bind(this);
    this.handleTanggunganOrtu = this.handleTanggunganOrtu.bind(this);
    this.handleStatusOrtu = this.handleStatusOrtu.bind(this);
    this.handleSemester = this.handleSemester.bind(this);
    this.handleIpk = this.handleIpk.bind(this);
    const {data} = this.props.location
    // console.log(data);
    this.state = {
      _id : "",
      nama_mahasiswa : "",
      alamat : "",
      jenis_kelamin : "",
      subkriteria_id : [],
      pendapatan_orangtua:"",
      tanggungan_orangtua:"",
      status:"",
      semester_data:"",
      ipk_data:"",
      pendapatan:[],
      tanggungan:[],
      status_orangtua:[],
      semester:[],
      ipk:[],
      data:data
    };
  }

  handleUpdate(e) {
    e.preventDefault();
    AlternatifService.putAlternatif(
      this.state._id,
      this.state.nama_mahasiswa,
      this.state.alamat,
      this.state.jenis_kelamin,
      this.state.subkriteria_id
    ).then(
      () => {
        this.props.history.push('/alternatif')
        window.location.reload();
      },
      error => {
        console.log(error.response);
      }
    )
  }
  handlePendapatanOrtu(evt){
    // evt.preventDefault();
    let subkriteria_ids = [...this.state.subkriteria_id];
    let item = subkriteria_ids[0];
    const value = evt.target.value;
    this.setState({
      pendapatan_orangtua:evt.target.value
    });
    item = value
    subkriteria_ids[0] = item
    this.setState({subkriteria_id:subkriteria_ids})

  }

  handleTanggunganOrtu(evt){
    evt.preventDefault();
    let subkriteria_ids = [...this.state.subkriteria_id];
    let item = subkriteria_ids[1];
    const value = evt.target.value;
    this.setState({
      tanggungan_orangtua:evt.target.value
    });
    item = value
    subkriteria_ids[1] = item
    this.setState({subkriteria_id:subkriteria_ids})

  }

  handleStatusOrtu(evt){
    evt.preventDefault();
    let subkriteria_ids = [...this.state.subkriteria_id];
    let item = subkriteria_ids[2];
    const value = evt.target.value;
    this.setState({
      status:evt.target.value
    });
    item = value
    subkriteria_ids[2] = item
    this.setState({subkriteria_id:subkriteria_ids})
  }

  handleSemester(evt){
    evt.preventDefault();
    let subkriteria_ids = [...this.state.subkriteria_id];
    let item = subkriteria_ids[3];
    const value = evt.target.value;
    this.setState({
      semester_data:evt.target.value
    });
    item = value
    subkriteria_ids[3] = item
    this.setState({subkriteria_id:subkriteria_ids})
  }

  handleIpk(evt){
    evt.preventDefault();
    let subkriteria_ids = [...this.state.subkriteria_id];
    let item = subkriteria_ids[4];
    const value = evt.target.value;
    this.setState({
      ipk_data:evt.target.value
    });
    item = value
    subkriteria_ids[4] = item
    this.setState({subkriteria_id:subkriteria_ids})
  }

  componentDidMount() {
    AlternatifService.getAlternatifByNim(this.state.data).then(
      response => {
        this.setState({
          _id:response.data._id,
          nama_mahasiswa:response.data.nama_mahasiswa,
          alamat:response.data.alamat,
          jenis_kelamin:response.data.jenis_kelamin,
          subkriteria_id:response.data.subkriteria_id,
          pendapatan_orangtua:response.data.subkriteria_id[0],
          tanggungan_orangtua:response.data.subkriteria_id[1],
          status:response.data.subkriteria_id[2],
          semester_data:response.data.subkriteria_id[3],
          ipk_data:response.data.subkriteria_id[4],
        })
        console.log(response.data.subkriteria_id);
      }
    )
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
        // console.log(response.data.data);
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
              <CInput type="text" id="_id" value={this.state._id} readOnly  name="_id" placeholder="Masukan NIM mahasiswa"/>
              <CFormText className="help-block">Masukan NIM mahasiswa</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nama_mahasiswa">Nama Mahasiswa</CLabel>
              <CInput type="text" id="nama_mahasiswa" readOnly value={this.state.nama_mahasiswa}  name="nama_mahasiswa" placeholder="Masukan nama mahasiswa"/>
              <CFormText className="help-block">Masukan nama mahasiswa</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="alamat">Alamat</CLabel>
              <CInput type="text" id="alamat" readOnly value={this.state.alamat}  name="alamat" placeholder="Masukan alamat"/>
              <CFormText className="help-block">Masukan alamat</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jenis Kelamin</CLabel>
              <CSelect custom name ="jenis_kelamin" readOnly value={this.state.jenis_kelamin}  id="jenis_kelamin">
                  <option value="">Please Select</option>
                  <option value="Laki">Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jumlah Pendapatan Orangtua</CLabel>
              <CSelect custom name ="pendapatan_orangtua" value={this.state.pendapatan_orangtua} onChange={this.handlePendapatanOrtu} id="pendapatan_orangtua">
                  <option value="">Please Select</option>
                  {this.state.pendapatan.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Jumlah Tanggungan Orangtua</CLabel>
              <CSelect custom name ="pendapatan_orangtua" value={this.state.tanggungan_orangtua} onChange={this.handleTanggunganOrtu} id="pendapatan_orangtua">
                  <option value="">Please Select</option>
                  {this.state.tanggungan.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Status Orangtua</CLabel>
              <CSelect custom name ="status_orangtua" value={this.state.status} onChange={this.handleStatusOrtu} id="status_orangtua">
                  <option value="">Please Select</option>
                  {this.state.status_orangtua.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">Semester</CLabel>
              <CSelect custom name ="semester" value={this.state.semester_data} onChange={this.handleSemester} id="semester">
                  <option value="">Please Select</option>
                  {this.state.semester.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="select">IPK</CLabel>
              <CSelect custom name ="ipk" value={this.state.ipk_data} onChange={this.handleIpk} id="ipk">
                  <option value="">Please Select</option>
                  {this.state.ipk.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_subkriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" onClick={this.handleUpdate} color="primary"><CIcon name="cil-scrubber" /> Update</CButton>
          <Link to="/alternatif">
          <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
          </Link>
        </CCardFooter>
      </CCard>
    )
  }
}
