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

export default class SubkriteriForm extends React.Component {
  constructor(props){
    super(props)
    // this.addSubkriteria = this.addSubkriteria.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKriteria = this.handleChange.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.state = {
      kriteria_content:[],
      kriteri_id: "",
      nama_subkriteria:"",
      nilai_subkriteria:0
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

  handleKriteria(evt) {
    const value = evt.target.value;
    this.setState({
      kriteria_id:value
    });
    console.log(value);
  }

  handleSaveData(e){
    e.preventDefault();
    KriteriaService.postSubkriteria(
      this.state.kriteri_id,
      this.state.nama_subkriteria,
      this.state.nilai_subkriteria
    ).then(
      () => {
        this.props.history.push("/kriteria/subkriteria")
        window.location.reload();
      }
    )
  }

  componentDidMount() {
    KriteriaService.getKriteriaContent().then(
      response => {
        this.setState({
          kriteria_content:response.data.data
        });
        console.log(response.data.data);
      },
      error => {
        console.log(error);
      }
    )
  }
  render(){
    return(
      <CCard>
        <CCardHeader>
          Tambah data sub kriteria
        </CCardHeader>
        <CCardBody>
          <CForm>
          <CFormGroup>
              <CLabel htmlFor="select">Jenis Kriteria</CLabel>
              <CSelect custom name ="pendapatan_orangtua" onChange={this.handleKriteria} id="pendapatan_orangtua">
                  <option value="">Please Select</option>
                  {this.state.kriteria_content.map(data => (
                    <option key={data._id} value={data._id}>{data.nama_kriteria}</option>
                  ))}
                </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nama_subkriteria">Nama Sub Kriteria</CLabel>
              <CInput type="text" id="nama_subkriteria" onChange={this.handleChange} name="nama_subkriteria" placeholder="Nama Sub Kriteria"/>
              <CFormText className="help-block">Masukan Nama Sub Kriteria</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nilai_subkriteria">Nilai</CLabel>
              <CInput type="number" id="nilai_subkriteria" onChange={this.handleChange} name="nilai_subkriteria" placeholder="Nilai Sub Kriteria"/>
              <CFormText className="help-block">Masukan Nilai</CFormText>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" onClick={this.handleSaveData} size="sm" color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
          <Link to="/kriteria/subkriteria">
          <CButton type="button" className="m-4" size="sm"  color="warning"><CIcon name="cil-ban" /> Batal</CButton>
          </Link>
        </CCardFooter>
      </CCard>
    )
  }
}
