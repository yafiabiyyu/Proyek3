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

// import KriteriaService from '../../service/kriteria.service';
import hasil_seleksi from '../dumy/hasil_seleksi';

export default class HasilSeleksi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // content:[],
      fields: [
        {key:'kode',label:'ID'},
        {key:'nama',label:'Nama Mahasiswa'},
        {key:'jp',label:'Jumlah Pendapatan Orang Tua'},
        {key:'jt',label:'Jumlah Tanggungan Orang tua'},
        {key:'st',label:'Status Orang TUa'},
        {key:'sm',label:'Semester'},
        {key:'ipk',label:'IPK'},
      ]
    }
  }
  // componentDidMount() {
  //   KriteriaService.getKriteriaContent().then(
  //     response => {
  //       this.setState({
  //         content:response.data.data
  //       });
  //       console.log(response.data.data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  // }
  render(){
    return(
      <div className="animated fadeIn">
        <CRow className="d-flex justify-content-between">
          <CCol>
            <CCard>
              <CCardHeader>
                Data Hasil Seleksi
              </CCardHeader>
              <CCardBody>
              {/* <Link to='/kriteria/add'>
                <CButton color="info" className="float-right m-2">Tambah Data</CButton>
              </Link> */}
              <CDataTable
                items={hasil_seleksi}
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
