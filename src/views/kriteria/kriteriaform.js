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
  CLabel
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import KriteriaService from '../../service/kriteria.service';

export default class KriteriaForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChangenama = this.onChangenama.bind(this);
    this.onChangeAtribut = this.onChangeAtribut.bind(this);
    this.onChangeBobot = this.onChangeBobot.bind(this);
    this.handleSaveData = this.handleSaveData.bind(this);
    this.state = {
      nama:"",
      atribut:"",
      bobot:0
    };
  }

  onChangenama(e){
    this.setState({
      nama: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeAtribut(e){
    this.setState({
      atribut: e.target.value
    });
    // console.log(e.target.value);
  }

  onChangeBobot(e){
    this.setState({
      bobot: e.target.value
    });
    // console.log(e.target.value);
  }

  handleSaveData(e) {
    e.preventDefault();
    console.log("Test");
    KriteriaService.postKriteriaData(
      this.state.nama,
      this.state.atribut,
      this.state.bobot
    ).then(
      () => {
        this.props.history.push("/kriteria")
        window.location.reload();
      },
      error => {
        console.log(error.response);
      }
    )
  }
  render(){
    return(
      <CCard>
        <CCardHeader>
          Tambah data kriteria
        </CCardHeader>
        <CCardBody>
          <CForm>
            <CFormGroup>
              <CLabel htmlFor="nf-nama">Nama Kriteria</CLabel>
              <CInput type="text" id="nf-nama" onChange={this.onChangenama} name="nf-text" placeholder="Masukan nama kriteria"/>
              <CFormText className="help-block">Masukan nama kriteria</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-atribut">Atribut</CLabel>
              <CInput type="text" id="nf-atribut" onChange={this.onChangeAtribut} name="nf-atribut" placeholder="Masukan jenis atribut"/>
              <CFormText className="help-block">Masukan jenis atribut</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-bobot">Bobot</CLabel>
              <CInput type="number" id="nf-bobot" onChange={this.onChangeBobot} name="nf-bobot" placeholder="Masukan jenis bobot"/>
              <CFormText className="help-block">Masukan jenis bobot</CFormText>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" onClick={this.handleSaveData} color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
          <Link to="/kriteria">
          <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
          </Link>
        </CCardFooter>
      </CCard>
    )
  }
}
