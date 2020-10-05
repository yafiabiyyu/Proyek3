import React from 'react'
import {Link} from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow
} from '@coreui/react'

import kriteriaData from '../dumy/KriteriaData'

const fields = ['no','kode', 'nama kriteria', 'atribut','bobot','status']

const Kriteria = () => {
  return(
    <div className="animated fadeIn">
      <CRow className="d-flex justify-content-between">
        <CCol>
          <CCard>
            <CCardHeader>
              Data Kriteria
            </CCardHeader>
            <CCardBody>
            <Link to='/kriteria/add'>
              <CButton color="info" className="float-right m-2">Tambah Data</CButton>
            </Link>
            <CDataTable
              items={kriteriaData}
              fields={fields}
              itemsPerPage={4}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <div className="row mx-md-n5">
                        <CButton className="m-2" color="success">Edit</CButton>
                        <CButton className="m-2" color="danger">Delete</CButton>
                      </div>
                    </td>
                  )
              }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}
export default Kriteria
