import React from 'react'
import {Link} from 'react-router-dom'
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CCard,
  CCardBody,
  CDataTable,
  CButton,
  CTabs,
  CCardHeader
} from '@coreui/react'
// import CIcon from '@coreui/icons-react'
import kriteriaData from '../dumy/SubkriteriaData'
import kriteriaTangungOrangtua from '../dumy/kriteriaTangungOrangtua'
import statusorangtua from '../dumy/statusorangtua'
import semester from '../dumy/semester'
import ipk from '../dumy/ipk'
const fields = [
  {key:'no',_style: { width: '20%'}},
  {key:'Nama Sub Kriteria'},
  {key:'Nilai',_style: { width: '20%'}},
  {key:'status'}
]

const Subkriteria = () => {
  return(
    <CCard>
          <CCardHeader>
            Sub Kriteria
          </CCardHeader>
            <Link to='/kriteria/subkriteria/add'>
              <CButton color="info" className="float-right mt-3 mr-5">Tambah Data</CButton>
            </Link>
          <CCardBody>
            <CTabs>
              <CNav variant="tabs">
                <CNavItem>
                  <CNavLink>
                    Pendapatan Orang Tua
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Tanggungan Orang Tua
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Status Orang Tua
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    Semester
                  </CNavLink>
                </CNavItem>
                <CNavItem>
                  <CNavLink>
                    IPK
                  </CNavLink>
                </CNavItem>
              </CNav>
              <CTabContent>
                <CTabPane>
                  <CDataTable
                    items={kriteriaData}
                    fields={fields}
                    itemsPerPage={4}
                    pagination
                    scopedSlots = {{
                      'status':
                        (item)=>(
                          <td>
                            <div className="row mx-md-n2">
                              <CButton className="m-2" color="success">Edit</CButton>
                              <CButton className="m-2" color="danger">Delete</CButton>
                            </div>
                          </td>
                        )
                    }}
                  />
                </CTabPane>
                <CTabPane>
                  <CDataTable
                      items={kriteriaTangungOrangtua}
                      fields={fields}
                      itemsPerPage={4}
                      pagination
                      scopedSlots = {{
                        'status':
                          (item)=>(
                            <td>
                              <div className="row mx-md-n2">
                                <CButton className="m-2" color="success">Edit</CButton>
                                <CButton className="m-2" color="danger">Delete</CButton>
                              </div>
                            </td>
                          )
                      }}
                    />
                </CTabPane>
                <CTabPane>
                  <CDataTable
                      items={statusorangtua}
                      fields={fields}
                      itemsPerPage={4}
                      pagination
                      scopedSlots = {{
                        'status':
                          (item)=>(
                            <td>
                              <div className="row mx-md-n2">
                                <CButton className="m-2" color="success">Edit</CButton>
                                <CButton className="m-2" color="danger">Delete</CButton>
                              </div>
                            </td>
                          )
                      }}
                    />
                </CTabPane>
                <CTabPane>
                  <CDataTable
                    items={semester}
                    fields={fields}
                    itemsPerPage={4}
                    pagination
                    scopedSlots = {{
                      'status':
                        (item)=>(
                          <td>
                            <div className="row mx-md-n2">
                              <CButton className="m-2" color="success">Edit</CButton>
                              <CButton className="m-2" color="danger">Delete</CButton>
                            </div>
                          </td>
                        )
                    }}
                  />
                </CTabPane>
                <CTabPane>
                  <CDataTable
                    items={ipk}
                    fields={fields}
                    itemsPerPage={4}
                    pagination
                    scopedSlots = {{
                      'status':
                        (item)=>(
                          <td>
                            <div className="row mx-md-n2">
                              <CButton className="m-2" color="success">Edit</CButton>
                              <CButton className="m-2" color="danger">Delete</CButton>
                            </div>
                          </td>
                        )
                    }}
                  />
                </CTabPane>
              </CTabContent>
            </CTabs>
          </CCardBody>
        </CCard>
  )
}
export default Subkriteria
