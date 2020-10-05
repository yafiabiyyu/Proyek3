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

const KriteriaForm = () => {

  return(
    <CCard>
      <CCardHeader>
        Tambah data kriteria
      </CCardHeader>
      <CCardBody>
        <CForm action="" method="post">
          <CFormGroup>
            <CLabel htmlFor="nf-nama">Nama Kriteria</CLabel>
            <CInput type="text" id="nf-nama" name="nf-text" placeholder="Masukan nama kriteria"/>
            <CFormText className="help-block">Masukan nama kriteria</CFormText>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-atribut">Atribut</CLabel>
            <CInput type="text" id="nf-atribut" name="nf-atribut" placeholder="Masukan jenis atribut"/>
            <CFormText className="help-block">Masukan jenis atribut</CFormText>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-bobot">Bobot</CLabel>
            <CInput type="text" id="nf-bobot" name="nf-bobot" placeholder="Masukan jenis bobot"/>
            <CFormText className="help-block">Masukan jenis bobot</CFormText>
          </CFormGroup>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
        <Link to="/kriteria">
        <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
        </Link>
      </CCardFooter>
    </CCard>
  )
}
export default KriteriaForm
