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

import KriteriaService from '../../service/kriteria.service';
// import bobot from '../dumy/bobot';

export default class HasilSaw extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // content:[],
      fields: [
        {key:'_id',label:'ID',_style: { width: '20%'}},
        {key:'nama_kriteria',label:'Nama Kriteria'},
        {key:'bobot',label:'Bobot',_style: { width: '20%'}},
      ]
    }
  }
  componentDidMount() {
    KriteriaService.getBobot().then(
      response => {
        this.setState({
          content:response.data.data
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
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Data Bobot
              </CCardHeader>
              <CCardBody>
              {/* <Link to='/kriteria/add'>
                <CButton color="info" className="float-right m-2">Tambah Data</CButton>
              </Link> */}
              <CDataTable
                items={this.state.content}
                fields={this.state.fields}
                itemsPerPage={4}
                pagination
                scopedSlots = {{
                  'status':
                    (item)=>(
                      <td>
                        <div className="row mx-md-n5">
                          <Link to={{pathname:"/kriteria/edit",
                        data:item.kode}}>
                            <CButton className="m-2" color="success">Edit</CButton>
                          </Link>
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
}
