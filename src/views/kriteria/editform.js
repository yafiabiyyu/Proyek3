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

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.onChangenama = this.onChangenama.bind(this);
    this.onChangeAtribut = this.onChangeAtribut.bind(this);
    this.onChangeBobot = this.onChangeBobot.bind(this);
    const {data} = this.props.location
    console.log(data);
    this.state = {
      nama:"",
      atribut:"",
      bobot:"",
      data:data
    };
  }

  componentDidMount() {
    KriteriaService.getKriteriaSpesifik(this.state.data).then(
      response => {
        console.log(response.data);
        this.setState({
          // content:response.data
          nama:response.data.nama,
          atribut:response.data.atribut,
          bobot:response.data.bobot
        })
      }
    )
  }
  onChangenama(e){
    e.persist();
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

  handleUpdate(e) {
    e.preventDefault();
    KriteriaService.putKriteriaData(
      this.state.data,
      this.state.nama,
      this.state.atribut,
      this.state.bobot
    ).then(
      (response) => {
        this.props.history.push('/kriteria')
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
              <CInput type="text" id="nf-nama" onChange={this.onChangenama} name="nf-text" value={this.state.nama} placeholder="Masukan nama kriteria"/>
              <CFormText className="help-block">Masukan nama kriteria</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-atribut">Atribut</CLabel>
              <CInput type="text" id="nf-atribut" onChange={this.onChangeAtribut} name="nf-atribut" value={this.state.atribut} placeholder="Masukan jenis atribut"/>
              <CFormText className="help-block">Masukan jenis atribut</CFormText>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="nf-bobot">Bobot</CLabel>
              <CInput type="number" id="nf-bobot" onChange={this.onChangeBobot} name="nf-bobot" value={this.state.bobot} placeholder="Masukan jenis bobot"/>
              <CFormText className="help-block">Masukan jenis bobot</CFormText>
            </CFormGroup>
          </CForm>
        </CCardBody>
        <CCardFooter>
          <CButton type="submit" size="sm" onClick={this.handleUpdate} color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
          <Link to="/kriteria">
          <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
          </Link>
        </CCardFooter>
      </CCard>
    )
  }
}
