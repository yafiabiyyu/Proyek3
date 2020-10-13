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

const KriteriaForm = () => {

  return(
    <CCard>
      <CCardHeader>
        Tambah data sub kriteria
      </CCardHeader>
      <CCardBody>
        <CForm action="" method="post">
          <CFormGroup>
            <CLabel htmlFor="select">Kriteria</CLabel>
            <CSelect custom name ="kriteria" id="kriteria">
                <option value="">Please Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </CSelect>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-atribut">Nama Sub Kriteria</CLabel>
            <CInput type="text" id="nf-atribut" name="nf-atribut" placeholder="Nama Sub Kriteria"/>
            <CFormText className="help-block">Masukan Nama Sub Kriteria</CFormText>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="nf-bobot">Nilai</CLabel>
            <CInput type="text" id="nf-bobot" name="nf-bobot" placeholder="Nilai Sub Kriteria"/>
            <CFormText className="help-block">Masukan Nilai</CFormText>
          </CFormGroup>
        </CForm>
      </CCardBody>
      <CCardFooter>
        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Simpan</CButton>
        <Link to="/kriteria/subkriteria">
        <CButton type="button" className="m-4" size="sm" color="warning"><CIcon name="cil-ban" /> Batal</CButton>
        </Link>
      </CCardFooter>
    </CCard>
  )
}
export default KriteriaForm
